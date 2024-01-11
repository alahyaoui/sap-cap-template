# Table of Contents

- [Coding Rules](#coding-rules)
- [Naming Conventions](#naming-conventions)
  - [SAP Fiori Frontend](#sap-fiori-frontend)
  - [Node.js JavaScript/TypeScript Backend](#nodejs-javascripttypescript-backend)
- [Git Workflow](#git-workflow)
  - [Branch Name Format](#branch-name-format)
  - [Commit Message Format](#commit-message-format)
  - [Merging Your Changes](#merging-your-changes)

# Coding Rules

To ensure source code consistency, please adhere to the following rules:

- All new features or bug fixes **must include unit-tests**.
- All methods **must be well-documented**.
- Adhere to our styling and linting guidelines. An automated formatter is at your disposal.

# Naming Conventions

For clarity and maintenance, please follow the naming conventions detailed below.

## SAP Fiori Frontend

- **Views**: CamelCase with an initial uppercase letter (e.g., `CustomerList.view.xml`).
- **Controllers**: CamelCase with a 'Controller' suffix (e.g., `CustomerListController.js`).
- **Fragments**: CamelCase with the word 'Fragment' included (e.g., `CustomerDetailFragment.fragment.xml`).
- **Component**: Named `Component.js`.
- **Model**: Lowercase with underscores (e.g., `invoice_model.js`).
- **CSS**: Lowercase with hyphens (e.g., `customer-list.css`).

## Node.js JavaScript/TypeScript Backend

### Folder and File Naming

- **Module Naming**: Use kebab-case for module names, ensuring they reflect their purpose.
- **File Naming**: Kebab-case for JavaScript, TypeScript, and CDS files.

For example:
```plaintext
srv/
  ├── handlers/
  │   ├── my-service-handler.js
  │   └── ...
  │
  ├── controllers/
  │    ├── my-service-controller.ts
  │    └── ...
  │
  ├── services/
  │    ├── my-service-service.ts
  │    └── ...
  │
  ├── repositories/
  │    ├── my-service-repository.ts
  │    └── ...
  │
  ├── utils/
  │    ├── object-utils.js
  │    ├── date-utils.js
  │    └── ...
  |
  ├── my-service.cds
  │
  └── ...
```

### Variable Naming

- General Variables: Use camelCase (e.g., `let teacher = "Karel";`).
- Constant Variables: Uppercase snake_case for constants (e.g., `const MAX_COUNT = 100;`).
- Function Naming: Use camelCase and verbs (e.g., `function saveUser(user) { ... }`).

```javascript
const MAX_REFERRALS = 6;

class ReferrerRepository {

    function submitReferrals(referrerID, referrals){
        const referrer = db.getReferrerByID(referrerID);
        let isReferralValid = (MAX_REFERRALS - (referrer.totalRefferals + referrals.length)) > 0
        ...
    }
}

```

### Naming Conventions for Other Entities

- Database Entities: PascalCase for CDS entity names.
- Services: PascalCase for service names.

For example:
```plaintext
entity MyEntity {
  key ID: Integer;
  field1: String;
  field2: Integer;
}

service MyService {
  entity MyEntity @readonly as projection on myEntities;
}
```

# Git Workflow

Here's a step-by-step guide to our Git workflow:

1. **Create a Local Branch**: Use `git checkout -b <type>/your-feature-name`.
2. **Code**: Make your changes on this branch.
3. **Commit and Push**: Regularly commit and push your work to the feature branch.

## Branch Name Format
When creating local branches, adhere to these naming conventions:

```plaintext
<type>/<short description>
  │          │
  │          └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │
  └─⫸ Branch Type: feature|bugfix|hotfix|release|docs|refactor|test
```

The `<type>` and `<description>` fields are mandatory.

### Type

* **Feature Branches**:
When working on new features, initiate a branch with `git checkout -b feature/your-feature-name`. Ensure the branch name is descriptive, and use hyphens to separate words.

* **Bug Fix Branches**:
When addressing bugs, create a branch using `git checkout -b bugfix/issue-number`. It's essential to include the issue number for transparent tracking.

* **Hotfix Branches**:
In situations demanding critical fixes in the production environment, establish a branch with `git checkout -b hotfix/fix-description`. Emphasize clarity in the branch name to facilitate understanding.

* **Release Branches**:
These branches serve to prepare for a new production release, allowing for final adjustments. Utilize the prefix `release/`, such as `release/v1.0.1`.

* **Documentation Branches**:
For tasks related to writing, updating, or fixing documentation, create branches with the prefix `docs/`. For example, `docs/api-endpoints`.

* **Refactoring Branches**:
When engaging in code refactoring, craft a branch using `git checkout -b refactor/description`. Clearly articulate the purpose of the refactoring in the branch name.

* **Testing Branches**:
To conduct testing activities, create branches with the prefix `test/`. For instance, `test/feature-testing` or `test/bugfix-testing`. This helps organize testing efforts and maintain a systematic approach.

### Description

* **Descriptive**:
Choose branch names that clearly convey the purpose of the changes.

* **Hyphenated Words**:
Use hyphens to separate words for improved readability.

## Commit Message Format

```plaintext
<type>(<scope>): <short summary>
  │       │            │
  │       │            └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: app|db|srv|scripts|docs
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: npm)
* **ci**: Changes to our CI configuration files and scripts (examples: GitHub Actions, Git hooks, Jenkins, etc...)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests

### Scope

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

* `migrations`: used for changes to the `npm update` migrations.

* none/empty string: useful for `test` and `refactor` changes that are done across all packages (e.g. `test: add missing unit tests`) and for docs changes that are not related to a specific package (e.g. `docs: fix typo in tutorial`).

### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* capitalize the first letter
* no dot (.) at the end

## Merging Your Changes

To merge your changes from your local branch:

1. **Open a Pull Request (PR)**: Target the `draft` branch and fill out the PR template.
2. **Review and Iterate**: Address feedback to improve your contribution.
3. **Pass CI Checks**: Ensure your changes pass all tests and checks.
4. **Final Approval and Merge**: Once approved, merge your changes.
5. **Delete the Branch**: Remove the feature branch if no longer needed.
