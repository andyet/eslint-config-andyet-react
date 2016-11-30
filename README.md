## eslint-config-andyet-react

This is the base set of eslint rules for andyet react projects

### Configs:

* `andyet-react`: base config for react stuff with babel + webpack
* `andyet-react/base`: config for just babel

## Installation

### React + Webpack + Babel

1. `npm install eslint eslint-config-andyet-react babel-eslint eslint-plugin-{import,react} eslint-import-resolver-webpack --save-dev`
2. Put the following in `.eslintrc`

    ```
    {
      "extends": ["andyet-react"]
    }
    ```

### Babel

1. `npm install eslint eslint-config-andyet-react babel-eslint --save-dev`
2. Put the following in `.eslintrc`

    ```
    {
      "extends": ["andyet-react/base"]
    }
    ```

## TODO:

- Maybe rename since this to `eslint-config-andyet-frontend` with separate configs from `react`, `webpack`, and `base`?