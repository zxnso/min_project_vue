module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    env: {
      node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {}
  }
  