module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'react-app',
    'react-app/jest'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'simple-import-sort'
  ],
  rules: {
    "simple-import-sort/imports": [
      "warn",
      {
        "groups": [
          // Packages `react` related packages come first.
          ["^react", "^redux", "^@?\\w", "^@hookform", "^yup", "^lodash"],
          // Style imports.
          ["^classnames", "^.+\\.s?css$", "^.+\\.?(svg|eot|ttf|woff|woff2|png|jpg|jpeg|gif)$"],
          // Side effect imports.
          ["^\\u0000"]
        ]
      }
    ]
  }
}
