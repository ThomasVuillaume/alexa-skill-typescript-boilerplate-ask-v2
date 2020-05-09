# Lambda source code folder

## Description

This folder contains all the code that you lambda is made of.
As it is written in TypeScript, I added a hook to build the TS files into JS so that the Lambda can execute.

This hook is declared in the `package.json`, under `post-install-hook`.

## Run the tests

To run the tests, simply run:

```bash
npm run test:unit
```

It will build the TS files (in the `.build` folder) then run unit-test + code coverage.
The results of the test will appear in the console, and also in the `test_output` folder at the root of the project.
