# Shared ESLint configuration for Remix projects

This ESLint configuration is for projects that use Remix.

- For Next.js projects use [@mkappelhof/eslint-config-next](https://www.npmjs.com/package/@mkappelhof/eslint-config-next)
- For React projects use [@mkappelhof/eslint-config-react](https://www.npmjs.com/package/@mkappelhof/eslint-config-react)
- For Node.js projects use [@mkappelhof/eslint-config-node](https://www.npmjs.com/package/@mkappelhof/eslint-config-node)

## Installation

Add the configuration as a dev dependency:

`yarn add @mkappelhof/eslint-config-remix`

Then create a `.eslintrc.js` config file with the following content:

```JavaScript
module.exports = {
  extends: ['@mkappelhof/eslint-config-remix'],
};
```
