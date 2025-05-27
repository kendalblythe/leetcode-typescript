import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    env: {
      node: true,
    },
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint'],
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    rules: {
      eqeqeq: 'error',
    },
  }),
];

export default eslintConfig;
