### Code Builder

To support the building of multiple programming languages, CLI's philosophy is to provide a **built-in or customized** build-flows (_i.e. {programmingLanguage}-{builderTool}_) to fullfill normal needs as well as special requests. This is called `CodeBuilder` in CLI.

- Most use cases will be covered by using the **built-in** build-flows. When building skillCode with this flow, CLI will infer the builderTool (based on the type of builder's config file) from the codebase, and further decide which build-flow to execute. Build-flows are represented by cross-OS executable scripts. Current built-in build-flows include:
  - nodejs-npm [(scripts)](https://github.com/alexa/ask-cli/tree/master/lib/builtins/build-flows/nodejs-npm)
  - python-pip [(scripts)](https://github.com/alexa/ask-cli/tree/master/lib/builtins/build-flows/python-pip)
  - java-mvn [(scripts)](https://github.com/alexa/ask-cli/tree/master/lib/builtins/build-flows/java-mvn)

### TypeScript customization

- Here, I had to **customize** the build-flow, so that is built an additional step is introduced. This step is called `post-install-hook` and refers to the step declared in package.json.
