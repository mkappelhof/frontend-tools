# Monorepo with frontend tooling

This repo contains various packages I use in personal projects.

- `packages/eslint-config-base`: Base ESLint configuration extended by specific configurations
- `packages/eslint-config-next`: ESLint configuration for Next.js projects
- `packages/eslint-config-node`: ESLint configuration for Node.js projects
- `packages/eslint-config-react`: ESLint configuration for React projects
- `packages/prettier`: Prettier configuration
- `packages/ts-config`: Various Typescript configurations (`tsconfig.json`)

## Use Prettier configuration

Add the package as a local dev dependency

`yarn add @mkappelhof/prettier-config`

Then create a `.prettierrc` config file with the following content:

```
"@mkappelhof/prettier-config"
```

## Use ESLint configuration

Add one of `@mkappelhof/eslint-config-next`, `@mkappelhof/eslint-config-node` or `@mkappelhof/eslint-config-react` as a local dev dependency

`yarn add @mkappelhof/eslint-config-next`

Then create a `.eslintrc.js` config file with the following content:

```JavaScript
module.exports = {
  extends: ['@mkappelhof/eslint-config-next'],
};
```

## Use Typescript configuration

Add the package as a local dev dependency

`yarn add @mkappelhof/ts-config`

Then create a `.tsconfig.json` config file with the following content:

```JSON
{
  "extends": "@mkappelhof/ts-config/next.json",
}
```
