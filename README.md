# eslint-plugin-ng-material

ESLint plugin for Angular that enforces camelCase naming for Angular Material button directives such as mat-button, mat-raised-button, and mat-icon-button.

This plugin reports and auto-fixes the following patterns with `--fix`:

- `mat-button` -> `matButton`
- `mat-icon-button` -> `matIconButton`
- `mat-raised-button` -> `matButton="elevated"`
- `mat-flat-button` -> `matButton="filled"`
- `mat-stroked-button` -> `matButton="outlined"`

## Installation

```bash
npm install --save-dev eslint-plugin-ng-material
```

## Usage (ESLint Flat Config)

```js
// eslint.config.js
import ngMaterialPlugin from 'eslint-plugin-ng-material';

export default [
  {
    files: ['**/*.html'],
    plugins: {
      'ng-material': ngMaterialPlugin,
    },
    rules: {
      'ng-material/mat-button-camel-case': 'error',
    },
  },
];
```

## Usage (.eslintrc - Legacy)

```json
{
  "plugins": ["ng-material"],
  "rules": {
    "ng-material/mat-button-camel-case": "error"
  }
}
```

## Rule

### ng-material/mat-button-camel-case

Enforces camelCase usage instead of kebab-case for Angular Material button directives.

## Keywords

angular material button camelcase eslint mat-button mat-raised-button mat-icon-button naming convention enforce lint