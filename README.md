## eslint-config-andyet-react

This is the base set of eslint rules for andyet react projects

### Configs:

* `andyet-react`: base config for react stuff with babel + webpack
* `andyet-react/base`: config for just babel

## Installation

### React + Webpack + Babel

1. `npm install eslint eslint-config-andyet-react babel-eslint eslint-plugin-{import,react} --save-dev`
2. Put the following in `.eslintrc`

    ```
    {
      "extends": ["andyet-react"]
    }
    ```

*If you are doing stuff in Webpack that's is different than Node's default module resolution, you'll also need to:*

1. `npm install eslint-import-resolver-webpack --save-dev`
2. Add the following to your `.eslintrc` (you can also add different settings [as described here](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack))

    ```
    {
        "settings": {
            "import/resolver": "webpack"
        }
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