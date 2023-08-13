# Shared ESLint configuration for Node projects

This ESLint configuration is for projects that run on Node.js.

- For Next.js projects use [@mkappelhof/eslint-config-next](https://www.npmjs.com/package/@mkappelhof/eslint-config-next)
- For React projects use [@mkappelhof/eslint-config-react](https://www.npmjs.com/package/@mkappelhof/eslint-config-react)

## Installation

Add the configuration as a dev dependency:

`yarn add @mkappelhof/eslint-config-node`

Then create a `.eslintrc.js` config file with the following content:

```JavaScript
module.exports = {
  extends: ['@mkappelhof/eslint-config-node'],
};
```
