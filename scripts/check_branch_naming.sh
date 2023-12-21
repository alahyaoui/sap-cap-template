#!/bin/bash

# Get the current branch name
BRANCH_NAME=$(git symbolic-ref --short HEAD)

# Define the valid branch name pattern
VALID_BRANCH_REGEX='^(draft|development|quality|main)$|^(feature|bugfix|hotfix|release|docs|refactor|test)\/[a-z0-9-]+'

# Check if the branch name matches the pattern
if [[ ! $BRANCH_NAME =~ $VALID_BRANCH_REGEX ]]; then
  echo "✖ Invalid branch name. Branch names must either be one of [draft, development, quality, main] or adhere to the following format:"
  echo "   - Start with a category prefix: feature/, refactor/, bugfix/, hotfix/, test/"
  echo "   - Followed by a kebab-cased description"
  echo ""
  echo "Examples of valid branch names:"
  echo "   - feature/add-new-feature"
  echo "   - refactor/update-user-service"
  echo "   - bugfix/fix-login-issue"
  echo ""
  echo "Please follow the branch naming best practices:"
  echo "   - Use prefixes to categorize branches"
  echo "   - Be descriptive and concise"
  echo "   - Avoid special characters"
  echo ""
  echo "Refer to the documentation for more details on branch naming."
  exit 1
fi

echo "✔ Valid branch name."
exit 0