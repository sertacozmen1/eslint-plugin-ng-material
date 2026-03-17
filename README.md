# eslint-plugin-ng-material

Custom ESLint plugin that enforces camelCase Angular Material button directives.

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

## Development

```bash
npm run check
```

This command runs `npm pack --dry-run` and verifies which files will be included in the npm package.

## GitHub ve npm Publish Checklist

1. Update the `author` field in `package.json`.

2. Initialize Git and push to GitHub:

```bash
git init
git add .
git commit -m "Initial release"
git branch -M main
git remote add origin https://github.com/sertacozmen1/eslint-plugin-ng-material.git
git push -u origin main
```

3. Log in to npm:

```bash
npm login
```

4. Publish the package:

```bash
npm publish --access public
```

## License

MIT
