#!/bin/bash

# Exit immediately if a command exits with a non-zero status
#set -e

# Set the color variables
RED="\e[31m"
GREEN="\e[32m"
YELLOW='\e[33m'
CLEAR="\e[0m"

# Set the status variable
SUCCESS=[${GREEN}success${CLEAR}]
WARN=[${YELLOW}warn${CLEAR}]
ERROR=[${RED}error${CLEAR}]

# Functions definition

function install_formatter(){
    # Attempt to install the format-cds package locally if it's not present
    if ! npm list @sap/cds-lsp &>/dev/null; then
        echo -e "${WARN} '@sap/cds-lsp' is not installed. Attempting to install it locally..."
        if ! npm install @sap/cds-lsp --save-dev; then
            echo -e "${ERROR} Failed to install '@sap/cds-lsp' locally. Exiting."
            exit  1
        fi
    fi
}

function create_directory(){
    declare -r DIRECTORY=$1
    # Clean up the temp directory if it exists
    if [[ -d "$DIRECTORY" ]]; then
        rm -rf "${DIRECTORY}"
    fi
    mkdir -p "${DIRECTORY}"
}

function check_formatting(){
    # Retrieve first parameter
    declare -r TARGET="$1"

    # Temporary directory for operations
    declare -r TMP_DIRECTORY="${TMP_ROOT_DIRECTORY}/${TARGET}"

    create_directory "${TMP_DIRECTORY}"

    # Copy files safely
    cp -r "${TARGET}/"*.cds "${TMP_DIRECTORY}/"

    # Format the copied CDS files
    install_formatter

    if ! npx format-cds "${TMP_DIRECTORY}" --silent; then
        echo -e "${ERROR} Failed to format CDS files."
        exit  1
    fi

    # Initialize counter for unformatted files
    declare -i unformatted_counter=0

    # Check formatting
    for file in "${TMP_DIRECTORY}"/*.cds; do
        declare base_file_name="$(basename "${file}")"
        declare backup_file_name="${base_file_name%.cds}.cds.bak"
        declare backup_file_path="${TMP_DIRECTORY}/${backup_file_name}"

        if [[ -e "$backup_file_path" ]]; then
            declare original_file_path="$(find "${TARGET}" -type f -name "${base_file_name}")"
            echo -e "${WARN} ${original_file_path}"
            unformatted_counter=$((unformatted_counter+1))
        fi
    done

    return $unformatted_counter
}

# Script execution

TMP_ROOT_DIRECTORY="cds_tmp"

create_directory "${TMP_ROOT_DIRECTORY}"

cp -r "./.cdsprettier.json" "${TMP_ROOT_DIRECTORY}/"

declare -i unformatted_counter=0

echo "Checking formatting..."
for directory in "$@"; do
    if [[ -d "${directory}" ]]; then
        check_formatting "${directory}"
        result=$?
        unformatted_counter=$((unformatted_counter+$result))
    else
        echo -e "${ERROR} Target directory does not exist: ${directory}"
    fi
done


# Clean up the temp directory
rm -rf "${TMP_ROOT_DIRECTORY}"

# Report on unformatted files
if (( unformatted_counter >  0 )); then
    echo -e "${WARN} Code style issues found in ${unformatted_counter} files. Run \`npm run format\` to fix."
    exit  1
fi

echo -e "${SUCCESS} All matched files use CDS code style!"
exit  0