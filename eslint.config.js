import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      quotes: ['error', 'single'],
      indent: ['error', 2],
      semi: ['error', 'always'],
      'max-len': ['error', { code: 80 }],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-body-style': ['error', 'as-needed'],
      'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      curly: ['error', 'multi-line'],
      'comma-style': ['error', 'last'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      'space-infix-ops': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'func-call-spacing': ['error', 'never'],
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect', // React 버전을 자동 감지
      },
    },
  },
  {
    ignores: ['dist/**/*.js'], // dist 디렉터리 내부의 JS 파일 무시
  },
];
