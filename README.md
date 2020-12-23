# Alexa Hello World : A modern TypesScript boilerplate

## Goal

This project is aiming at providing an easy-to-use boilerplate to begin developping an Alexa Skill with TypeScript. This project includes:

- TypeScript code (of course)
- Eslint with TypeScript plugin [See more](https://typescript-eslint.io)
- i18next for internationalization and localization
- Prettier to get the style right
- Bespoken for Unit Testing - [See more](https://read.bespoken.io/unit-testing/guide/#overview)

It was generated using the official ask-V2 `ask-cli new` command, then modified in order to have it TypeScripted.

It is thus intented to be fully compatible with the `ask` V2 commands.

## Related works

This project was based on some other projects, in particular:

- [A similar project, by Szymon Rozga](https://github.com/srozga/alexa-node-sdk-typescript-boilerplate)
- [A Dockerized boilerplate, by Salvatore Cordiano](https://github.com/salvatorecordiano/alexa-skill-boilerplate)

## Requirements

A global installation is required for the following packages:

- gulp-cli [2.3.0]
- ask-cli [2.22.0]
- bespoken-tools [2.4.88]

TypeScript installed is 3.9.7, and is a dev-dependency.

This project has been built using `ask-cli`. It needs it to run. If you have'nt configured it yet, please [follow those instructions](https://github.com/alexa/ask-cli#getting-started).

Full API reference is available [here](https://developer.amazon.com/fr-FR/docs/alexa/smapi/ask-cli-command-reference.html)

## Folder structure

| File/Folder          | Description                                                                                         |
| :------------------- | :-------------------------------------------------------------------------------------------------- |
| hooks                | Configuration custom build scripts, here used to compile TS files                                   |
| infrastructure/      | Contains CloudFormation definitions for deploying the skill to AWS                                  |
| lambda/              | Contains the source code for the skill that utilizes the ASK SDK                                    |
| skill-package/       | Skill resources utilized by the ASK platform such as skill manifest, interaction models, and assets |
| test/unit            | Skill unit tests, written in order to be used with Bespoken tool                                    |
| ask-resources config | Configuration for the Alexa skill project                                                           |

## Deploy the skill

In order for Alexa to communicate with the skill code, it will need to be deployed and hosted on the cloud using this command.
Using the hooks provided to deal with TypeScript files, it will take care of the compilation, before deploying JS files.

```bash
$ ask deploy
```

The deploy command performs the following steps:

1. `skill-package/` resources will be zipped and uploaded to the ASK platform via SMAPI's [Skill Package Service](https://developer.amazon.com/docs/smapi/skill-package-api-reference.html).
2. `lambda/` source files will be built and zipped for deployment to AWS. We currently support the build flows of npm for Nodejs, pip for Python and maven for Java developers.
3. `infrastructure/` definitions will be used to provision resources on AWS. The `lambda/`'s zip file from the previous step will be deployed to the provisioned AWS Lambda function.

### WINDOWS-USERS WARNING

If, like I do, you have to use Windows to run this project, please pay a special attention to [this page](https://github.com/alexa/ask-cli/blob/develop/docs/FAQ.md#q-for-windows-users-if-your-skill-return-empty-response-and-log-shows-module-not-found-genericerrormapper-or-cannot-find-module-dispatchererrormappergenericerrormapper-how-to-resolve). In few words: Powershell is not zipping files properly, you have to update a package otherwise your Lambda will not work.
