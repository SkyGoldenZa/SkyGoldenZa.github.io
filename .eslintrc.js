module.exports = {
   extends: ['airbnb', 'prettier'],
   plugins: ['prettier'],
   env: {
      browser: true,
      es6: true,
   },
   rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      // 'import/no-extraneous-dependencies': 'off',
      'no-console': 'warn',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-filename-extension': 'off', // disable if necessary
      'react/static-property-placement': 'off', // disable if necessary
      'react/jsx-props-no-spreading': 'off', // disable if necessary
      'react/require-default-props': 'off',
      'react/jsx-indent': ['error', 3],
      // "react/jsx-indent-props": ["error", 3],
      'react/jsx-indent-props': 'off',

      'comma-dangle': 'warn',
      'func-names': 'warn',
      'global-require': 'off',
      'import/no-dynamic-require': 'off',
      'import/no-extraneous-dependencies': [
         'off',
         {
            devDependencies: false,
         },
      ],
      'import/no-named-as-default-member': 'off',
      'import/no-self-import': 'off',
      'import/prefer-default-export': 'off',
      indent: ['error', 3, { SwitchCase: 1 }],
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/label-has-for': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx/a11y/control-has-associated-label': 'off',
      'linebreak-style': 'off',
      'max-len': [
         'error',
         {
            code: 160,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreRegExpLiterals: true,
         },
      ],
      'no-confusing-arrow': 'off',
      // "no-console": "off",
      'no-trailing-spaces': 'warn',
      'no-unused-vars': 'warn',
      'operator-linebreak': ['warn', 'before'],
      'no-multiple-empty-lines': 'off',
      'object-curly-newline': [
         'warn',
         {
            ImportDeclaration: { multiline: true, minProperties: 6 },
            ExportDeclaration: { multiline: true, minProperties: 6 },
         },
      ],
      'padded-blocks': 'warn',
      'react/destructuring-assignment': 'off',
      'no-irregular-whitespace': 'off',

      'react/jsx-wrap-multilines': 'off',
      'react/prefer-stateless-function': 'warn',
      'react/state-in-constructor': 'off',
      'react/sort-comp': 'warn',
      camelcase: [
         'warn',
         {
            allow: [
               'UNSAFE_componentDidMount',
               'UNSAFE_componentWillReceiveProps',
               'UNSAFE_componentWillUpdate',
               'UNSAFE_componentWillMount',
            ],
         },
      ],
      'template-curly-spacing': 'off',
      'react/jsx-props-no-multi-spaces': 'warn',
      'react/jsx-fragments': 'off', // TODO
      'react/no-deprecated': 'warn',
      'react/prop-types': 'warn', // TODO
      'react/jsx-curly-newline': 'warn', // TODO
      'react/jsx-curly-brace-presence': 'warn', // TODO
      'arrow-parens': 'off',
      'spaced-comment': 'warn',
   },
   parser: 'babel-eslint',
};
