module.exports = {
  plugins: [
    'import'
  ],

  settings: {
    'import/ignore': [
      'node_modules'
    ]
  },

  rules: {
    'import/no-unresolved': [2, {commonjs: true}],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-duplicates': 2,
    'import/unambiguous': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-mutable-exports': 2,
    'import/newline-after-import': 2
  }
}
