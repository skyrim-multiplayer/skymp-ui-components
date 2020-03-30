# Contributing to skymp-ui-components

### Before you started development

- Learn rules of [Code of Conduct](CODE_OF_CONDUCT.MD)
- Learn style guide:
  https://github.com/airbnb/javascript
  https://www.robinwieruch.de/javascript-naming-conventions

### How to start developed?

1. Clone this repository

```sh
git clone https://github.com/svyatoslavratov/skymp-ui-components.git
```

2. Install all dependencies

```sh
npm install
```

3. Run the complete test suite

```sh
npm run test
```

4. Start development

```sh
npm run start
```

### Where are components tested and view?

Begin testing and view components with [Storybook](https://github.com/storybookjs/storybook)

```sh
npm run storybook
```

Storybook will available on localhost on port that point in package.json

### Development workflow

- `npm start` runs **rollup** watcher
- `npm run lint` checks the code style
- `npm test` runs the complete test suite
- `npm pretty` runs **prettier** with autofix
- `npm run storybook` builds and runs the **storybook** on localhost

More scripts see in package.json

### Recommended extensions for VS code

These extensions will create best developer experience

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | look at [github](https://github.com/Microsoft/vscode-eslint.git)

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | look at [github](https://github.com/prettier/prettier-vscode.git)

- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) | look at [github](https://github.com/stylelint/vscode-stylelint)

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) | look at [github](https://github.com/editorconfig/editorconfig-vscode.git)

- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | look at [github](https://github.com/eamodio/vscode-gitlens.git)

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) | look at [github](https://github.com/formulahendry/vscode-auto-close-tag.git)

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) | look at [github](https://github.com/formulahendry/vscode-auto-rename-tag.git)

- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) | look at [github](https://github.com/shd101wyy/vscode-markdown-preview-enhanced)
