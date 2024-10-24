# Encontrei esse teste no google e achei muito interessante:


Objetivo: O objetivo deste teste é avaliar suas habilidades em desenvolvimento frontend, incluindo HTML, CSS, JavaScript e, se possível, Angular. Você será solicitado a criar uma aplicação web que utiliza uma fake API de loja para exibir uma lista de produtos e seus detalhes. Será avaliado o layout, a organização e estrutura do código, seu conhecimento do framework escolhido (Angular, se optar por utilizá-lo) e sua capacidade de criar uma experiência de usuário intuitiva e agradável. 

Requisitos Básicos: Desenvolver uma página de listagem de produtos, utilizando HTML, CSS e JavaScript. Utilizar a API de loja fake fornecida pelo serviço https://dummyjson.com/. Criar uma página de detalhes para exibir informações completas de cada produto. 





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
