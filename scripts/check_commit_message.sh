#!/bin/bash

# Get the current commit message
COMMIT_MESSAGE_FILE=$1
COMMIT_MESSAGE=$(cat "$COMMIT_MESSAGE_FILE")

# Check the length of the commit message
MAX_SUBJECT_LENGTH=100

SUBJECT_LENGTH=${#COMMIT_MESSAGE}

if [ $SUBJECT_LENGTH -gt $MAX_SUBJECT_LENGTH ]; then
  echo "✖ Invalid commit message length. The subject line should be no longer than $MAX_SUBJECT_LENGTH characters."
  exit 1
fi

# Check if the commit message is empty
if [[ -z $COMMIT_MESSAGE ]]; then
  echo "✖ Invalid commit message. Commit message must not be empty."
  exit 1
fi

# Define the valid commit message format pattern
VALID_TYPES=("build" "ci" "docs" "feat" "fix" "perf" "refactor" "test")
VALID_SCOPES=("(app)" "(db)" "(srv)" "(scripts)" "(docs)" "(packaging)" "(changelog)" "(migrations)")
VALID_COMMIT_REGEX="^([a-z]+)(\(([a-z]+)\))?: ([A-Z].*[^.])$"

if [[ $COMMIT_MESSAGE =~ $VALID_COMMIT_REGEX ]]; then

  TYPE="${BASH_REMATCH[1]}"
  SCOPE="${BASH_REMATCH[2]}"
  SUMMARY="${BASH_REMATCH[3]}"

  # Check if the type and scope are valid
  if ! [[ " ${VALID_TYPES[@]} " =~ " ${TYPE} " ]]; then
      echo "✖ Invalid type in commit message."
      echo ""
      echo "You provided the following commit type: '${TYPE}'"
      echo ""
      echo "Valid types are one of the followings: ${VALID_TYPES[@]}"
      echo ""
      echo "For more details, refer to the Commit Message Format guidelines in docs/CONTRIBUTING.md."
      exit 1
  fi

  # Check if the type and scope are valid
  if ! [[ -z $SCOPE || " ${VALID_SCOPES[@]} " =~ " ${SCOPE} " ]]; then
      echo "✖ Invalid scope in commit message."
      echo ""
      echo "You provided the following commit scope '${SCOPE}'"
      echo ""
      echo "Valid scopes are one of the followings: ${VALID_SCOPES[@]}"
      echo ""
      echo "For more details, refer to the Commit Message Format guidelines in docs/CONTRIBUTING.md."
      exit 1
  fi
else
  echo "✖ Invalid commit message syntax. Please refer to the Commit Message Format in docs/CONTRIBUTING.md."
  echo ""
  echo "You provided the following commit message: '${COMMIT_MESSAGE}'"
  echo ""
  echo "Correct syntax: <type>(<scope>): <short summary>"
  echo "Where valid types: ${VALID_TYPES[@]}"
  echo "Where valid scopes: ${VALID_SCOPES[@]}"
  echo "Example: feat(app): Add new feature"
  echo ""
  echo "For more details, refer to the commit message guidelines."
  exit 1
fi

echo "✔ Valid commit message."
exit 0