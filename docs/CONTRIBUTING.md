# Contents

 - [Coding Rules](#coding)
 - [Git workflow](#git)
   - [Branch Name Format](#branch)
   - [Commit Message Guidelines](#commit)
      - [Commit Message Header](#commit-header)
      - [Commit Message Body](#commit-body)
      - [Commit Message Footer](#commit-footer)
      - [Revert commits](#commit-revert)
   - [Merging Your Changes](#merge)

# <a name="coding"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* All API methods **must be documented**.
* The code **must be following** the linting and styling guidelines.

   An automated formatter is available.


# <a name="git"></a> Git workflow

Before you begin coding, follow these steps:

1. **Checkout to a local Branch**:
Create a dedicated local branch using git checkout -b `<type>`/your-feature-name. This keeps your changes isolated from the main/quality/development/draft branches until ready for integration. 

1. **Code Away**:
Once on your feature branch, make your code modifications. This approach keeps the main branch stable while you work on improvements or additions.

1. **Commit and Push**:
Regularly commit your changes locally and push to your feature branch. This ensures your work is saved and can be easily shared with others if needed.


## <a name="branch"></a> Branch Name Format

When creating local branches, adhere to these naming conventions:

```
<type>/<short description>
  │          │
  │          └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │
  └─⫸ Branch Type: feature|bugfix|hotfix|release|docs|refactor|test
```

The `<type>` and `<description>` fields are mandatory.

### Type

* **Feature Branches**:
For new features, use git checkout -b feature/your-feature-name. Keep the branch name descriptive and use hyphens to separate words.

* **Bug Fix Branches**:
When addressing a bug, create a branch with git checkout -b bugfix/issue-number. Include the issue number for clear tracking.

* **Hotfix Branches**:
For critical fixes in the production environment, use git checkout -b hotfix/fix-description. Prioritize clarity in the branch name.

* **Release Branches**:
 These branches are used to prepare for a new production release. They allow for last-minute dotting of i’s and crossing t’s. Use the prefix release/. For example, release/v1.0.1

* **Documentation Branches**: 
These branches are used to write, update, or fix documentation. Use the prefix docs/. For instance, docs/api-endpoints.

* **Refactoring Branches**:
When refactoring code, create a branch using git checkout -b refactor/description. Clearly state the purpose of the refactoring in the branch name.

Following these naming conventions enhances clarity, organization, and collaboration in your local Git workflow.

### Description

* **Descriptive**:
Choose branch names that clearly convey the purpose of the changes.

* **Hyphenated Words**:
Use hyphens to separate words for improved readability.


## <a name="commit"></a> Commit Message Format

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of type "docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.


### <a name="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │            │
  │       │            └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: app|db|srv|scripts|docs
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


#### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: npm)
* **ci**: Changes to our CI configuration files and scripts (examples: GitHub Actions, Git hooks, Jenkins, etc...)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests


#### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

* `app`
* `db`
* `srv`
* `scripts`
* `docs`

There are currently a few exceptions to the "use package name" rule:

* `packaging`: used for changes that change the npm package layout in all of our packages, e.g. public path changes, package.json changes done to all packages, d.ts file/format changes, changes to bundles, etc.

* `changelog`: used for updating the release notes in CHANGELOG.md

* `dev-infra`: used for dev-infra related changes within the directories /scripts and /tools

* `migrations`: used for changes to the `npm update` migrations.

* none/empty string: useful for `test` and `refactor` changes that are done across all packages (e.g. `test: add missing unit tests`) and for docs changes that are not related to a specific package (e.g. `docs: fix typo in tutorial`).


#### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end


### <a name="commit-body"></a>Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.


### <a name="commit-footer"></a>Commit Message Footer

The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, Service Now tickets, Jira tickets, and other PRs that this commit closes or is related to.
For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

or

```
DEPRECATED: <what is deprecated>
<BLANK LINE>
<deprecation description + recommended update path>
<BLANK LINE>
<BLANK LINE>
Closes #<pr number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

Similarly, a Deprecation section should start with "DEPRECATED: " followed by a short description of what is deprecated, a blank line, and a detailed description of the deprecation that also mentions the recommended update path.


### <a name="commit-revert"></a>### Revert commits

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.

### <a name="merge"></a>## Merging Your Changes

Once you are done with the changes you are working on, it is now time to merge your change.

1. **Commit and Push:**
   Ensure your changes are committed following Git guidelines. Push to your local feature branch.

1. **Open a Pull Request (PR):**
   Create a PR targeting the **draft** branch. Provide a descriptive title and fill the pull request template.

1. **Review and Iterate:**
   Respond to feedback promptly for collaborative improvement.

1. **Pass CI Checks:**
   Ensure changes pass automated tests and CI checks.

1. **Maintain Code Quality:**
   Adhere to coding standards and best practices.

1. **Final Approval and Merge:**
   Once approved, merge your changes.

1. **Delete the branch:**
   Once your changes are merged, do not forget to delete it if no longer needed.

Pull Requests (PRs) help us work together by providing a clear process to suggest changes. They make sure our code is reviewed well for quality and readability, following project standards. PRs keep things transparent and make it easy to add changes, keeping our code healthy.