# Table of Contents

1. [Coding Rules](#coding-rules)
2. [Best Practices](#best-practices)
    1. [JavaScript Best Practices](#javascript-best-practices)
    2. [TypeScript Best Practices](#typescript-best-practices)
    3. [CAP CDS Best Practices](#cds-best-practices)
3. [Naming Conventions](#naming-conventions)
    1. [SAP Fiori Naming Conventions](#sap-fiori-naming-conventions)
    2. [Node.js Naming Conventions](#nodejs-naming-conventions)
    3. [Artifact Naming Conventions](#artifact-naming-conventions)
4. [Git Workflow](#git-workflow)
    1. [Branch Name Format](#branch-name-format)
    2. [Commit Message Format](#commit-message-format)
    3. [Merging Your Changes](#merging-your-changes)


# Coding Rules

To maintain the quality and consistency of our source code, we enforce the following coding rules:

- **Best Practices Adherence**: Your code **must adhere** to the best practices guidelines. This ensures that we maintain high standards of code quality, readability, and maintainability.

- **Naming Conventions**: Ensure that your code **follows** our naming conventions. Consistent naming makes it easier for developers to understand and maintain the codebase.

- **Styling and Linting**: Your code **must comply** with our styling and linting guidelines. We provide an automated formatter to help you maintain a consistent code style across the project.

- **Unit Testing**: All new features or bug fixes **must include unit tests**. Unit tests are essential to verify the correctness of your code and prevent regressions.

- **Documentation**: Every method **must be well-documented**. Clear and comprehensive documentation helps other developers understand the purpose and usage of each method, improving overall code comprehension and maintainability.

# Best Practices

Best practices ensure code quality, performance, scalability, consistency, security, and compliance.

## JavaScript Best Practices

JavaScript empowers developers with dynamic typing and powerful features. Embrace these capabilities by adhering to JavaScript best practices for safer and more efficient code.

### Variable Declarations

- **Use `const` and `let`**: Prefer `const` for variables that won't be reassigned and `let` for variables that need to be reassigned. [Read about const and let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

- **Minimize the use of `var`**: Use `const` and `let` instead to avoid variable hoisting issues and promote block-scoping.

### Function Declarations

- **Arrow Functions**: Use arrow functions (`() => {}`) for anonymous functions and simple one-liners to maintain concise and readable code. [Explore arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

- **Named Functions**: Prefer named function expressions over anonymous functions for better stack traces and debugging. 

### Handling Asynchronous Operations

- **Promises and Async/Await**: Embrace Promises for handling asynchronous operations, and leverage async/await syntax for cleaner and more readable asynchronous code. [Learn about Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Object-Oriented Programming

- **Prototypal Inheritance**: Embrace JavaScript's prototypal inheritance model rather than classical inheritance. Utilize prototype chains and Object.create for object composition. [Understand JavaScript inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

- **Object Destructuring**: Use object destructuring to extract properties from objects and improve code readability. [Dive into object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring).

### Array Manipulation

- **Array Methods**: Utilize built-in array methods like `map`, `filter`, `reduce`, and `forEach` for efficient and concise array manipulation, rather than traditional loops. [Explore array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

- **Spread and Rest Operators**: Leverage the spread (`...`) and rest (`...args`) operators for array manipulation and function parameter handling. [Learn about spread and rest operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

### Error Handling

- **Throwing Errors**: Use `throw` to raise exceptions and provide meaningful error messages. Handle errors gracefully using try-catch blocks to prevent application crashes. 
[Understand error handling in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Error_handling).

### Performance Optimization

- **Debouncing and Throttling**: Implement debouncing and throttling techniques to optimize performance, especially for event handlers and AJAX requests. [Explore debouncing and throttling](https://css-tricks.com/debouncing-throttling-explained-examples/).

- **Avoid Global Variables**: Minimize the use of global variables to prevent namespace pollution and improve performance. [Read about global variables](https://developer.mozilla.org/en-US/docs/Glossary/Global_object).

### Security

- **Avoid `eval`**: Refrain from using `eval()` as it can introduce security vulnerabilities if not used carefully. Evaluate alternatives for dynamic code execution. [Learn about the dangers of eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!).

### Testing

- **Unit Testing**: Write comprehensive unit tests using testing frameworks like Jest or Mocha to ensure the reliability and correctness of JavaScript code. [Get started with unit testing in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Testing_your_code/Unit_testing).

- **Integration Testing**: Conduct integration tests to verify the interactions between different modules and components. [Explore integration testing](https://www.smashingmagazine.com/2020/08/integration-tests-browser-mocha-chai/).

### Boolean Comparison

- **Strict Equality**: Prefer strict equality (`===`) and inequality (`!==`) operators over loose equality (`==`) and inequality (`!=`) operators. Strict equality ensures both value and type equality, reducing unexpected behavior. [Learn about strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#identity)

- **Truthy and Falsy Values**: Understand JavaScript's concept of truthy and falsy values when performing boolean comparisons. Familiarize yourself with values considered falsy (e.g. `false`, `0`, `''`, `null`, `undefined`, `NaN`) and truthy (e.g. non-empty strings, non-zero numbers, objects) to write concise and readable code. [Explore truthy and falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

- **Ternary Operator**: Utilize the ternary operator (`condition ? expr1 : expr2`) for concise conditional expressions, enhancing code readability while avoiding unnecessary verbosity. [Understand the ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

- **De Morgan's Laws**: Apply De Morgan's Laws when dealing with complex boolean expressions to simplify and improve readability. [Learn about De Morgan's Laws](https://en.wikipedia.org/wiki/De_Morgan%27s_laws)

## Typescript Best Practices

TypeScript brings strong typing and other advanced features to JavaScript, allowing for safer and more robust code. To make the most out of TypeScript, follow these best practices:

### Type Annotations
- **Explicit Typing**: Explicitly annotate types for variables, function parameters, and return types to enhance code clarity and maintainability. [Learn more about type annotations](https://www.typescriptlang.org/docs/handbook/basic-types.html).

- **Use of `unknown`**: Prefer using `unknown` over `any` when the type is unknown or could vary. [Explore `unknown` type](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type).

- **Type Inference**: Leverage TypeScript's type inference capabilities but provide explicit types where inference might be ambiguous or insufficient. [Understand type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html).

### Interface and Type Declarations
- **Use of Interfaces**: Define clear and descriptive interfaces to represent object shapes and promote type safety. [Learn about interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html).

- **Type Aliases**: Utilize type aliases to create reusable type definitions, especially for complex types or union types. [Explore type aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases).

- **Avoid Excessive Nesting**: Keep interfaces and types flat to improve readability and maintainability.

### Class and Object-Oriented Design
- **Access Modifiers**: Utilize access modifiers (`public`, `private`, `protected`) to control access to class members and enforce encapsulation. [Understand access modifiers](https://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers).

- **Use of Readonly**: Prefer `readonly` properties to prevent accidental mutation of object properties. [Learn about readonly properties](https://www.typescriptlang.org/docs/handbook/classes.html#readonly-modifier).

- **Abstract Classes and Methods**: Use abstract classes and methods to define blueprints for classes and ensure implementation consistency. [Explore abstract classes](https://www.typescriptlang.org/docs/handbook/classes.html#abstract-classes).

### Enums and Union Types
- **Enums**: Use enums to define a set of named constants and improve code readability. [Learn about enums](https://www.typescriptlang.org/docs/handbook/enums.html).

- **Union Types**: Leverage union types to represent values that can be of multiple types, enhancing code flexibility and expressiveness. [Understand union types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types).

### Generics
- **Generic Functions and Classes**: Utilize generics to write reusable and type-safe functions and classes that can work with a variety of data types. [Learn about generics](https://www.typescriptlang.org/docs/handbook/generics.html).

- **Constraint Types**: Apply constraints to generics to restrict the types that can be used, ensuring type safety and preventing runtime errors. [Explore constraint types](https://www.typescriptlang.org/docs/handbook/generics.html#generic-constraints).

### Error Handling and Control Flow
- **Handle Errors with `try-catch`**: Use `try-catch` blocks to handle synchronous errors gracefully, providing a fallback mechanism for error recovery. [Learn about error handling](https://www.typescriptlang.org/docs/handbook/advanced-types.html#never).

- **Async/Await for Asynchronous Error Handling**: Leverage `async/await` syntax for asynchronous error handling, simplifying error propagation and management. [Explore async/await](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html#asyncawait).

### Modules and Dependency Management
- **Use of ES Modules**: Prefer using ES modules (`import` and `export`) for better compatibility and support for TypeScript's type system. [Understand ES modules](https://www.typescriptlang.org/docs/handbook/modules.html).

- **Dependency Injection**: Utilize dependency injection patterns to decouple components and improve testability and maintainability.

### Configuration and Tooling
- **tsconfig.json Optimization**: Optimize `tsconfig.json` settings to enforce strict type checking, target specific ECMAScript versions, and enable other TypeScript features. [Configure tsconfig.json](https://www.typescriptlang.org/tsconfig).

- **Editor Integration**: Configure editors (e.g. Visual Studio Code) to leverage TypeScript's language features, such as code completion, type checking, and refactoring tools. [Explore TypeScript in Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript).

### Testing and Quality Assurance
- **Type-Safe Testing**: Write type-safe tests using testing frameworks like Jest or Mocha, leveraging TypeScript's static type checking capabilities.

- **Use of TypeScript ESLint Plugin**: Incorporate the TypeScript ESLint plugin to enforce coding standards and detect potential issues through static code analysis. [Explore TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint).

### Documentation
- **Type Annotations in Documentation**: Include type annotations in code comments and documentation to improve understanding and usage of the project.

## CDS Best Practices

When working with SAP Cloud Application Programming Model (CAP) and Core Data Services (CDS), it's essential to follow best practices to ensure consistency, maintainability, and performance of your codebase. Below are some recommended practices to consider:

### Entity Definition

- **Use Annotations Wisely**: Leverage annotations such as `@readonly`, `@title`, and `@label` to provide additional metadata for your entities. However, avoid overusing annotations, as they can clutter the code and make it harder to maintain.

- **Define Semantics**: Clearly specify the [semantic type](https://cap.cloud.sap/docs/cds/cdl#type-definition) of fields to ensure data integrity and facilitate better integration with other SAP services and tools.

- **Keep Entities Focused**: Design entities with a clear and single responsibility. Avoid creating overly complex entities that mix multiple concerns, as this can lead to maintenance challenges and decreased performance.

### Querying and Filtering

- **Optimize Queries**: When querying data, consider using [projections and filters](https://cap.cloud.sap/docs/guides/service/#filter-and-ordering) to retrieve only the necessary information. Avoid fetching excessive data that is not required for the current operation.

- **Use Access Controls**: Implement [access controls](https://cap.cloud.sap/docs/guides/service/#restricting-access) to restrict data access based on user roles and permissions. This helps enforce security policies and prevent unauthorized access to sensitive information.

- **Parameterize Queries**: [Parameterize queries](https://cap.cloud.sap/docs/guides/service/#parameterized-queries) where possible to prevent SQL injection attacks and improve query performance.

### Modeling Relationships

- **Choose Relationship Types Carefully**: Select the appropriate relationship type (e.g. [composition](https://cap.cloud.sap/docs/guides/association/#composition-associations), [association](https://cap.cloud.sap/docs/guides/association/#association-associations)) based on the nature of the relationship between entities. Consider factors such as data ownership, cardinality, and cascading behavior.

- **Avoid Circular References**: Minimize [circular dependencies](https://cap.cloud.sap/docs/guides/association/#circular-associations) between entities to prevent potential issues with data consistency and cyclic dependencies.

### Documentation

- **Document Your Data Model**: Provide comprehensive documentation for your CDS data model, including entity definitions, field descriptions, and relationship diagrams. This helps developers understand the data structure and usage guidelines.

- **Update Documentation Regularly**: Keep your documentation up-to-date as you make changes to your data model. This ensures that developers have access to accurate information and reduces confusion during development and maintenance.

# Naming Conventions

For clarity and maintenance, please follow the naming conventions detailed below.

## SAP Fiori Naming Conventions

- **Views**: CamelCase with an initial uppercase letter (e.g. `CustomerList.view.xml`).
- **Controllers**: CamelCase with a 'Controller' suffix (e.g. `CustomerListController.js`).
- **Fragments**: CamelCase with the word 'Fragment' included (e.g. `CustomerDetailFragment.fragment.xml`).
- **Component**: Named `Component.js`.
- **Model**: Lowercase with underscores (e.g. `invoice_model.js`).
- **CSS**: Lowercase with hyphens (e.g. `customer-list.css`).

## Node.js JavaScript/TypeScript Naming Conventions

### Folder and File Naming

- **Module Naming**: Use kebab-case for module names, ensuring they reflect their purpose.
- **File Naming**: Kebab-case for JavaScript, TypeScript, and CDS files.

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

General Rules:
- Do not use abbreviations.
- Avoid choosing characters other than letters.

Specific Rules:
- **Primitives**: Use camelCase (e.g. `let teacher = "Karel";`).
- **Objects**: Use camelCase (e.g. `const car = {brand: "Audi", model: "A1"};`).
- **Arrays**: Use camelCase and plural (e.g. `const brands = ["Mercedes", "Audi", "Volkswagen"];`).
- **Hard-coded values**: Uppercase snake_case for hard-coded values (e.g. `const PI = 3.1416;`).
- **Global Variables**: Uppercase snake_case for global variables (e.g. `const MAX_COUNT = 100;`).
- **Functions**: Use camelCase and verbs (e.g. `function saveUser(user) { ... }`).
- **Classes**/**Interfaces**/**Types**/**Enums**: Use PascalCase (e.g. `class Company(user) { ... }`).

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

### Naming Conventions for Entities

- Database Entities: PascalCase for CDS entity names.
- Services: PascalCase for service names.

```plaintext
entity MyEntities {
  key ID: Integer;
  field1: String;
  field2: Integer;
}

service MyService {
  entity MyEntities @readonly as projection on myEntities;
}
```


## Artifact Naming Conventions

### Namespace
- Consider using a namespace for your application to avoid conflicts with other applications.

```yaml
ID: com.example.myapp
```

### Module Names
- Modules represent different parts of your application, such as services, applications, or databases.
- Use lowercase letters for module names.
- Use underscores or hyphens to separate words for better readability.

`my-service-module` or `order-processing-app`.

### Resource Names
- Resources represent external services, databases, or other resources.
- Follow the same conventions as module names.

`my-hana-db` or `messaging-broker`.

### Provided and Required Dependencies
- When specifying dependencies between modules, use the `provides` and `requires` sections.
- Use lowercase letters with underscores or hyphens.

```yaml
requires:
  - name: my-service-module
```

### Properties and Parameters
- Use lowercase letters with underscores for property and parameter names.

```yaml
properties:
  endpoint_url: "https://api.example.com"
```

### Versioning
- Specify versions for modules and resources to manage dependencies.
- Follow Semantic Versioning (SemVer) conventions for version numbers.

### Naming Consistency
- Maintain consistency throughout your `mta.yaml` file. Use similar naming patterns for related artifacts.

### Avoid Special Characters
- Avoid using special characters in names, as it can lead to issues in some environments.

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
For tasks related to writing, updating, or fixing documentation, create branches with the prefix `docs/`. e.g. `docs/api-endpoints`.

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

* **build**: Changes that affect the build system or external dependencies (e.g. scopes: npm)
* **ci**: Changes to our CI configuration files and scripts (e.g.§ GitHub Actions, Git hooks, Jenkins, etc...)
* **docs**: Documentation only changes
* **feat**: A new non breaking feature
* **feat!**: A new breaking feature
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
4. **Final Approval and Merge**: Once approved, merge your changes by either by choosing the option `rebase` or `squash` depending on your needs.
5. **Delete the Branch**: Remove the feature branch if no longer needed.
