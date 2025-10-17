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
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: [],
  }),
];

export default eslintConfig;
