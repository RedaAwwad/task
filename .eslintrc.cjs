module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // globals: {
  //   defineNuxtConfig: 'readonly',
  //   defineNuxtPlugin: 'readonly',
  //   useRuntimeConfig: 'readonly',
  //   useNuxtApp: 'readonly',
  //   clearError: 'readonly',
  //   createError: 'readonly',
  //   onMounted: 'readonly',
  //   ref: 'readonly',
  //   computed: 'readonly',
  //   useBreakpoints: 'readonly',
  //   useCookie: 'readonly',
  // },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    'no-restricted-imports': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
