# Coding Blind Tech Platform

## What I Have Done

1. Created new TypeScript react app using:
   ```
   npm create vite@latest
   ```
2. Updated vite config to ouse server port 3000.
3. Installed material UI:
   ```
   npm install @mui/material @types/material-ui
   ```
4. Installed @emotion/styled @emotion/react:
   ```
   npm install @emotion/styled @emotion/react
   ```
5. Installed imports for `Visibility` and `VisibilityOff`.
   ```
   npm install @mui/icons-material
   ```


## React Hook Forms

React Hook Forms, is the library I use for handling forms.

```
npm install react-hook-form @hookform/resolvers yup
```


## Default README Information with Vite and React

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
