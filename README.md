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

## Publishing (Maintainers)

This section is only for maintainers of this plugin.

1. Update the version in package.json.
2. Verify the package contents:

```bash
npm run check
```

3. Run tests:

```bash
npm test
```

4. Publish to npm:

```bash
npm login
npm publish --access public
```

## License

MIT
