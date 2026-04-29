# React-shop-cloudfront

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.

## Infra

Link to S3: https://nodejsawsshopreactstack-nodejsawsshopreactbucket3f-zmwqh1s5qceo.s3.eu-north-1.amazonaws.com/
Should not have public access

Link to CF: https://d180fy39z34bng.cloudfront.net/
Should have public acess

## Available infra scripts:

### Prerequisites

!!!Needs latest verison of the source to work with updated `dist` folder.
1. Build project 
```npm run build```
2. Go to infra folder:
```cd infra```

### `bootstrap`

Prepares your AWS account for CDK. Creates the necessary resources to store assets during deployment.

### `diff`

Compares the specified stack and its dependencies with the deployed stack. Use this to visualize infrastructure changes before applying them.

### `deploy`

Deploys the infrastructure resources to your AWS account based on the defined stacks.

### `destroy`

Removes all AWS resources associated with the stacks to ensure no infrastructure is left behind.
