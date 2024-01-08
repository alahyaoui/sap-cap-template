# Table of Contents

1. [Git Hooks Explained](#git-hooks-explained)
2. [Types of Git Hooks](#types-of-git-hooks)
   - [Client-side Hooks](#client-side-hooks)
   - [Server-side Hooks](#server-side-hooks)
3. [Setting Up and Using Git Hooks](#setting-up-and-using-git-hooks)
   - [Default Approach](#default-approach)
   - [Git Hooks with Husky](#git-hooks-with-husky)
       - [Why Husky?](#why-husky)
4. [Setting Up Git Hooks with Husky, ESLint, Lint-Staged, and Prettier in a Node.js Project](#setting-up-git-hooks-with-husky-eslint-lint-staged-and-prettier-in-a-nodejs-project)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Configuration](#configuration)
       - [ESLint](#eslint)
       - [Prettier](#prettier)
       - [Lint-Staged](#lint-staged)
       - [Husky](#husky)
   - [Usage](#usage)
5. [Customizing the Setup](#customizing-the-setup)

# Git Hooks Explained

Git hooks are scripts that Git executes at specific points during the version control process. They enable you to customize or automate actions before or after certain Git events, such as committing, pushing, or merging. This can be particularly useful for enforcing coding standards, running tests, or performing other tasks to maintain the quality and consistency of your codebase.

## Types of Git Hooks

Git supports a variety of hooks, including client-side and server-side hooks. Below are some commonly used ones:

### Client-side Hooks

1. **Pre-commit:** This hook is executed before a commit is created, allowing you to check the changes for syntax errors, linting issues, or other criteria.

2. **Prepare-commit-msg:** This hook is invoked before the commit message is opened, allowing you to manipulate the commit message.

3. **Commit-msg:** This hook runs after the commit message is saved, enabling additional validation of the commit message.

4. **Post-commit:** This hook is executed after a commit is created, useful for triggering notifications or other post-commit actions.

### Server-side Hooks

1. **Pre-receive:** This hook runs on the server before it processes the received data, allowing you to enforce policies on the incoming commits.

2. **Update:** Similar to pre-receive but operates on a per-branch basis.

3. **Post-receive:** This hook is executed after the entire process is completed, useful for triggering notifications or updating external systems.

For more hooks, you can refer to the official Git documentation [here](https://git-scm.com/docs/githooks).

## Setting Up and Using Git Hooks

### Default Approach

Typically, to set up Git hooks, you would create executable scripts with specific names in the `.git/hooks` directory of your Git repository. These scripts can be written in any scripting language, such as Bash, Python, or Perl. However, managing Git hooks can be challenging due to their local nature in each developer's repository. To overcome this, we use [Husky](https://typicode.github.io/husky/).

### Git Hooks with Husky

In our projects, we leverage Git hooks for tasks like enforcing coding standards and running tests before commits. However, Git hooks are local to each developer's repository, making them challenging to share easily. To address this, we've incorporated [Husky](https://typicode.github.io/husky/) into our workflow.

#### Why Husky?

Husky simplifies the management and sharing of Git hooks within our project. By defining hooks in the `package.json` file, they become part of the project configuration, ensuring that all team members use the same set of hooks. This not only promotes consistency but also streamlines the development process.

## Setting Up Git Hooks with Husky, ESLint, Lint-Staged, and Prettier in a Node.js Project

This guide explains how to set up Git hooks with Husky, ESLint, Lint-Staged, and Prettier in a Node.js project. The setup process involves installing necessary packages, configuring ESLint, Lint-Staged, and Prettier, and setting up Husky hooks.

### Prerequisites

Before starting, ensure that you have Node.js installed on your machine and that your project is initialized with npm (Node Package Manager) by checking for a `package.json` file in your project root.

### Installation

Install the necessary packages using npm:

```bash
npm install --save-dev husky lint-staged eslint prettier
```

This command installs Husky, Lint-Staged, ESLint, and Prettier as devDependencies in your project.

### Configuration

#### ESLint

[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in JavaScript and TypeScript code, aiming to make code more consistent and avoid bugs. Initialize ESLint in your project:

```bash
npx eslint --init
```

This command starts the setup process for ESLint. Follow the prompts to configure ESLint according to your project needs. An `.eslintrc.json` file will be generated based on your responses.

#### Prettier

[Prettier](https://prettier.io/) is a code formatter that makes your code more readable and consistent. Create an empty Prettier configuration file:

```bash
touch .prettierrc
```

Also, create a `.prettierignore` file to specify which files Prettier should ignore:

```bash
touch .prettierignore
```

#### Lint-Staged

[lint-staged](https://github.com/okonet/lint-staged) is a tool that runs linters on pre-committed files in a Git repository. Configure Lint-Staged in your `package.json`:

```json
"lint-staged": {
 "*.js,*.ts": ["eslint --fix", "prettier --write"]
}
```

This configuration tells Lint-Staged to run ESLint and Prettier on all staged JavaScript files and automatically fix problems that ESLint can correct.

#### Husky

First, initialize Husky in your project:

```bash
npx husky-init && npm install
```

Then, update your `package.json` to include the following configuration:

```json
"scripts": {
 "prepare": "husky install"
}
```

This configuration initializes Husky in your project.

Next, set up a `pre-commit` hook:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

This command adds a `pre-commit` hook that runs Lint-Staged before each commit. If Lint-Staged fails (due to ESLint errors), the commit will be aborted.

Finally, add executable rights to your hook

```bash
chmod +x .husky/pre-commit
```

Now, your Husky setup is complete.

Please note that the Husky team recommends using Yarn instead of npm for managing Husky hooks. This is because Husky hooks are installed globally, and npm scripts can behave differently depending on the user's global environment settings.

### Usage

With this setup, every time you attempt to commit changes, Husky will run Lint-Staged, which in turn runs ESLint and Prettier on your staged files. If ESLint or Prettier finds any problems that they cannot automatically fix, the commit will be aborted.

Remember to commit your changes regularly to avoid losing work. If you're not satisfied with the automatic fixes applied by ESLint and Prettier, you can manually edit the problematic files before committing again.

## Customizing the Setup

While the setup provided here serves as a solid foundation, feel free to modify it according to your project's unique needs. You may want to add or remove hooks, modify existing scripts, or even introduce new scripts that execute on hooks. 

Git hooks offer a great deal of flexibility, allowing you to automate various aspects of your development workflow. Whether it's enforcing coding standards, running tests, or integrating with external services, hooks can be a powerful tool for maintaining code quality and consistency.

For instance, you could add a `post-checkout` hook that automatically refreshes dependencies whenever you switch branches. Or perhaps a `pre-push` hook that ensures all tests pass before you push your changes. The possibilities are vast and largely depend on what you need for your project.

Remember, the key to effective use of Git hooks is understanding when and where they are triggered. You can find detailed information on this in the [official Git documentation](https://git-scm.com/docs/githooks).

As you customize your setup, keep in mind that these modifications should ideally be documented in your project's README or another easily accessible location. This way, anyone who works on the project in the future will know what hooks are configured and why.
