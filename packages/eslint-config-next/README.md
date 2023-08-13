# Shared ESLint configuration for NextJS projects

This ESLint configuration is for projects that use NextJS.

- For Node.js projects use [@mkappelhof/eslint-config-node](https://www.npmjs.com/package/@mkappelhof/eslint-config-node)
- For React projects use [@mkappelhof/eslint-config-react](https://www.npmjs.com/package/@mkappelhof/eslint-config-react)

## Installation

Add the configuration as a dev dependency:

`yarn add @mkappelhof/eslint-config-next`

Then create a `.eslintrc.js` config file with the following content:

```JavaScript
module.exports = {
  extends: ['@mkappelhof/eslint-config-next'],
};
```
