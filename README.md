# SAP Cloud Application Programming Model Template

This template is designed to support TypeScript, git-hooks, GitHub actions, a Node.js backend following the MVC design pattern, and SAP Fiori frontend.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application Locally](#running-the-application-locally)
- [Building and Deploying to Cloud Foundry](#building-and-deploying-to-cloud-foundry)
- [Testing](#testing)
- [License](#license)

## Getting Started

This project is a full stack application for the SAP BTP, Cloud Foundry environment that utilizes the SAP Cloud Application Programming Model (CAP) for Node.js and SAPUI5 with TypeScript. The project showcases a full stack app entirely built with TypeScript [Source 0](https://github.com/SAP-samples/btp-full-stack-typescript-app).

## Prerequisites

Ensure you have the latest LTS version of Node.js installed. You can download Node.js from the official website [Source 1](https://github.com/SAP-samples/cloud-cap-samples).

## Installation

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/SAP-samples/btp-full-stack-typescript-app.git
cd btp-full-stack-typescript-app
```

Install the dependencies:

```bash
npm install
```

Navigate to the `app/lectures` sub-folder and install the dependencies:

```bash
cd app/lectures
npm install
```

[Source 0](https://github.com/SAP-samples/btp-full-stack-typescript-app)

## Running the Application Locally

Start the service and UI:

```bash
npm run start-service:ts
npm run start-ui:ts
```

The UI5 app is now running on `http://localhost:8080/index.html` [Source 0](https://github.com/SAP-samples/btp-full-stack-typescript-app).

## Building and Deploying to Cloud Foundry

Additional preparation steps and tools are required to deploy the application to SAP BTP, Cloud Foundry environment. For more information and guidance on the initial setup, please have a look at these tutorials and resources:

```bash
mbt build -t ./
cf login
cf deploy lecture-schedule_1.0.0.mtar
```

[Source 0](https://github.com/SAP-samples/btp-full-stack-typescript-app)

## Testing

Run the tests using the following command:

```bash
npx jest
```

[Source 1](https://github.com/SAP-samples/cloud-cap-samples)

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the LICENSE file.

Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.

[Source 0](https://github.com/SAP-samples/btp-full-stack-typescript-app)
