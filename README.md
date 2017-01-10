## eslint-config-andyet-frontend

This is the base set of eslint rules for andyet frontend projects. It is built for linting different types of frontend code. If it doesn't work for the type of code you're writing, feel free to add it!

Currently it can lint for:

- babel
- react
- require/import/export
- webpack specific require/import/export


## Installation and Usage

Currently `eslint` doesn't provide a great way to package plugins with configs, so any plugin used by the config you choose will have to be installed. To make that a little easier, each plugin needed is listed below for easy `npm install`ing.

The required plugins are also not listed as `peerDependencies` because otherwise all plugins would need to be installed even if they weren't being used.


### Base

The base config just includes the common rules for frontend browser development, along with the `import` plugin which handles some common cases of making sure the stuff you `require` is actually there.

```
npm install eslint eslint-config-andyet-frontend eslint-plugin-import --save-dev
```

```json
{
  "extends": ["andyet-frontend"]
}
```

### Babel

The `babel` config adds on top of the base config above, but makes sure the linter parses your code using the plugins and presets you've configured for `babel`.

```
npm install eslint eslint-config-andyet-frontend eslint-plugin-import babel-eslint --save-dev
```

```json
{
  "extends": ["andyet-frontend/babel"]
}
```

### React

The `react-webpack` config adds on top of the `react` config above, but adds rules for `react` and also assumes you're using `babel`.

```
npm install eslint eslint-config-andyet-frontend eslint-plugin-import eslint-plugin-react babel-eslint --save-dev
```

```json
{
  "extends": ["andyet-frontend/react"]
}
```

### React & Webpack

The `react` config adds on top of the base config above, but also configures the import plugin so it will follow paths setup by your `webpack.config`.

```
npm install eslint eslint-config-andyet-frontend eslint-plugin-import eslint-plugin-react babel-eslint eslint-import-resolver-webpack --save-dev
```

```json
{
  "extends": ["andyet-frontend/react-webpack"]
}
```

### Webpack

The `webpack` config adds on top of the base config above, but adds rules for `react` and also assumes you're using `babel`.

```
npm install eslint eslint-config-andyet-frontend eslint-plugin-import eslint-import-resolver-webpack --save-dev
```

```json
{
  "extends": ["andyet-frontend/webpack"]
}
```

## Contributing

If you want to add some rules to this, they should go in a new file inside the [`configs/`](./configs/) directory.

Then you can combine any of those configs into a top level config file. Check out [`react-webpack.js`](`./react-webpack.js`) for an example.

You could also add a test file inside [`tests/`](./tests/), if you want to test that some specific syntax is linted properly.
