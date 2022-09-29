# Contributing to the SAP Cloud SDK Documentation Portal

## Prerequisites

- [Node.js](https://nodejs.org/en/download/).
  We recommend the latest LTS version of node.js.
  Check your version with `node -v`.
  You can use [`nvm`](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine.

## Hosting the Documentation Locally

- Run `npm install`
- Run `npm start`
- The SAP Cloud SDK documentation portal should open in a new browser window

### How To Document

The markdown files for the documentation are in the `docs` directory.
Add or change an article and create a pull request.

### Docker Alternative

- Consider the following commands (1) to install node dependencies and (2) to serve the continuously generated site:

  ```bash
  docker run -it --rm -v "${pwd}:/doc" -w "/doc" --entrypoint "/bin/sh" node:alpine3.10 -c "npm ci"
  docker run -it --rm -v "${pwd}:/doc" -w "/doc" --entrypoint "/bin/sh" -p 3000:3000 node:alpine3.10 -c "npm run start -- --port 3000 --host 0.0.0.0"
  ```

<!-- vale off -->
## Dos and Don'ts

- Be concise.
- Put each sentence on its own line to keep the changelogs clean.
- Avoid abbreviations or introduce them unless it's obvious and widely adopted.
- Don't sell your features, explain them.
- Use simple words and short sentences.
- Avoid statements about the complexity (e.g. "simply do this") as it can be discouraging for less-experienced readers.
- Add meaningful examples wherever possible.
- Add links whenever you mention a third party resource.
- Build upon already available content and use it for reference.
- Write incrementally.

<!-- vale on -->

## Linting and Formatting

### Vale

Vale is a command-line tool that brings code-like linting to prose.
This repository has a special configuration to enforce a consistent style.

To use Vale locally, install it via your package manager.

```bash
# macos / linux
$ brew install vale
# windows
$ choco install vale
```

If you use Microsoft Visual Studio Code, you can use the official [Vale plugin](https://marketplace.visualstudio.com/items?itemName=errata-ai.vale-server) to get hints in your editor.
Once installed, add the following lines to your configuration.

```json
{
  "vale.core.useCLI": true,
  "vale.valeCLI.path": "/usr/local/bin/vale"
}
```

### ESLint and Prettier

Please use [ESLint](https://eslint.org) and [Prettier](https://prettier.io/) to keep the markdown files and code examples consistently formatted.

```bash
# Install dependencies including ESLint and Prettier
$ npm install
# Run ESLint and Prettier
$ npm run lint
# Fix ESLint and Prettier issues automatically
$ npm run lint:fix
```

### External Grammar Checker

There is no automated grammar checker, but there are free online grammar checkers available.
Examples are [Grammarly](https://app.grammarly.com/) or [Hemingway](http://www.hemingwayapp.com/).
Since you upload your text to their servers, you may only upload content with `PUBLIC` designation.

Please check your text manually with one of the mentioned tools before creating a pull request.

## Contributing as a Team Member

1. Go to: https://opensource-portal.tools.sap.corp/
2. Search for the `cloud-sdk-team` and ask colleagues to add you.

Once you are part of the team, you can submit `pull requests` without forking the repository.

## Developer Certificate of Origin (DCO)

Due to legal reasons, contributors will be asked to accept a DCO before they submit the first pull request to this project.
This happens in an automated fashion during the submission process.
SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).
