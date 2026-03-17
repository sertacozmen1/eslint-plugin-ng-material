/**
 * Custom ESLint rule to enforce camelCase usage for Material button directives.
 * Flags `mat-button` and `mat-icon-button` as errors and auto-fixes them to `matButton` and `matIconButton`.
 */

/** @type {import('eslint').Rule.RuleModule} */
const matButtonCamelCaseRule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce camelCase usage for Angular Material button directives (matButton, matIconButton)',
      recommended: true,
    },
    fixable: 'code',
    messages: {
      useMatButton: 'Use "matButton" instead of "mat-button". Angular Material uses camelCase attribute syntax.',
      useMatIconButton:
        'Use "matIconButton" instead of "mat-icon-button". Angular Material uses camelCase attribute syntax.',
      useMatButtonElevated:
        'Use "matButton=\\"elevated\\"" instead of "mat-raised-button". Angular Material uses camelCase attribute syntax.',
      useMatButtonFilled:
        'Use "matButton=\\"filled\\"" instead of "mat-flat-button". Angular Material uses camelCase attribute syntax.',
      useMatButtonOutlined:
        'Use "matButton=\\"outlined\\"" instead of "mat-stroked-button". Angular Material uses camelCase attribute syntax.',
    },
    schema: [],
  },

  create(context) {
    const sourceCode = context.sourceCode ?? context.getSourceCode();

    return {
      // Handle Element nodes (for attributes on elements)
      Element(node) {
        if (!node.attributes) return;

        for (const attr of node.attributes) {
          checkAttribute(attr, context, sourceCode);
        }
      },

      // Handle BoundAttribute nodes (for [attr] bindings)
      BoundAttribute(node) {
        checkBoundAttribute(node, context, sourceCode);
      },
    };
  },
};

/**
 * Check a regular attribute for mat-button or mat-icon-button usage
 */
function checkAttribute(attr, context, sourceCode) {
  const attrName = attr.name;

  if (attrName === 'mat-button') {
    context.report({
      node: attr,
      messageId: 'useMatButton',
      loc: attr.sourceSpan
        ? {
            start: {
              line: attr.sourceSpan.start.line + 1,
              column: attr.sourceSpan.start.col,
            },
            end: {
              line: attr.sourceSpan.end.line + 1,
              column: attr.sourceSpan.end.col,
            },
          }
        : undefined,
      fix(fixer) {
        return createFix(fixer, attr, sourceCode, 'mat-button', 'matButton');
      },
    });
  }

  if (attrName === 'mat-icon-button') {
    context.report({
      node: attr,
      messageId: 'useMatIconButton',
      loc: attr.sourceSpan
        ? {
            start: {
              line: attr.sourceSpan.start.line + 1,
              column: attr.sourceSpan.start.col,
            },
            end: {
              line: attr.sourceSpan.end.line + 1,
              column: attr.sourceSpan.end.col,
            },
          }
        : undefined,
      fix(fixer) {
        return createFix(fixer, attr, sourceCode, 'mat-icon-button', 'matIconButton');
      },
    });
  }

  if (attrName === 'mat-raised-button') {
    context.report({
      node: attr,
      messageId: 'useMatButtonElevated',
      loc: attr.sourceSpan
        ? {
            start: {
              line: attr.sourceSpan.start.line + 1,
              column: attr.sourceSpan.start.col,
            },
            end: {
              line: attr.sourceSpan.end.line + 1,
              column: attr.sourceSpan.end.col,
            },
          }
        : undefined,
      fix(fixer) {
        return createFix(fixer, attr, sourceCode, 'mat-raised-button', 'matButton="elevated"');
      },
    });
  }

  if (attrName === 'mat-flat-button') {
    context.report({
      node: attr,
      messageId: 'useMatButtonFilled',
      loc: attr.sourceSpan
        ? {
            start: {
              line: attr.sourceSpan.start.line + 1,
              column: attr.sourceSpan.start.col,
            },
            end: {
              line: attr.sourceSpan.end.line + 1,
              column: attr.sourceSpan.end.col,
            },
          }
        : undefined,
      fix(fixer) {
        return createFix(fixer, attr, sourceCode, 'mat-flat-button', 'matButton="filled"');
      },
    });
  }

  if (attrName === 'mat-stroked-button') {
    context.report({
      node: attr,
      messageId: 'useMatButtonOutlined',
      loc: attr.sourceSpan
        ? {
            start: {
              line: attr.sourceSpan.start.line + 1,
              column: attr.sourceSpan.start.col,
            },
            end: {
              line: attr.sourceSpan.end.line + 1,
              column: attr.sourceSpan.end.col,
            },
          }
        : undefined,
      fix(fixer) {
        return createFix(fixer, attr, sourceCode, 'mat-stroked-button', 'matButton="outlined"');
      },
    });
  }
}

/**
 * Check a bound attribute for mat-button or mat-icon-button usage
 */
function checkBoundAttribute(node, context, sourceCode) {
  const attrName = node.name;

  if (attrName === 'mat-button') {
    context.report({
      node,
      messageId: 'useMatButton',
      loc: node.sourceSpan
        ? {
            start: {
              line: node.sourceSpan.start.line + 1,
              column: node.sourceSpan.start.col,
            },
            end: {
              line: node.sourceSpan.end.line + 1,
              column: node.sourceSpan.end.col,
            },
          }
        : undefined,
      fix(fixer) {
        return createFix(fixer, node, sourceCode, 'mat-button', 'matButton');
      },
    });
  }

  if (attrName === 'mat-icon-button') {
    context.report({
      node,
      messageId: 'useMatIconButton',
      loc: node.sourceSpan
        ? {
            start: {
              line: node.sourceSpan.start.line + 1,
              column: node.sourceSpan.start.col,
            },
            end: {
              line: node.sourceSpan.end.line + 1,
              column: node.sourceSpan.end.col,
            },
          }
        : undefined,
      fix(fixer) {
        return createFix(fixer, node, sourceCode, 'mat-icon-button', 'matIconButton');
      },
    });
  }

  if (attrName === 'mat-raised-button') {
    context.report({
      node,
      messageId: 'useMatButtonElevated',
      loc: node.sourceSpan
        ? {
            start: {
              line: node.sourceSpan.start.line + 1,
              column: node.sourceSpan.start.col,
            },
            end: {
              line: node.sourceSpan.end.line + 1,
              column: node.sourceSpan.end.col,
            },
          }
        : undefined,
      fix(fixer) {
        return createFix(fixer, node, sourceCode, 'mat-raised-button', 'matButton="elevated"');
      },
    });
  }

  if (attrName === 'mat-flat-button') {
    context.report({
      node,
      messageId: 'useMatButtonFilled',
      loc: node.sourceSpan
        ? {
            start: {
              line: node.sourceSpan.start.line + 1,
              column: node.sourceSpan.start.col,
            },
            end: {
              line: node.sourceSpan.end.line + 1,
              column: node.sourceSpan.end.col,
            },
          }
        : undefined,
      fix(fixer) {
        return createFix(fixer, node, sourceCode, 'mat-flat-button', 'matButton="filled"');
      },
    });
  }

  if (attrName === 'mat-stroked-button') {
    context.report({
      node,
      messageId: 'useMatButtonOutlined',
      loc: node.sourceSpan
        ? {
            start: {
              line: node.sourceSpan.start.line + 1,
              column: node.sourceSpan.start.col,
            },
            end: {
              line: node.sourceSpan.end.line + 1,
              column: node.sourceSpan.end.col,
            },
          }
        : undefined,
      fix(fixer) {
        return createFix(fixer, node, sourceCode, 'mat-stroked-button', 'matButton="outlined"');
      },
    });
  }
}

/**
 * Create a fix to replace kebab-case with camelCase
 */
function createFix(fixer, node, sourceCode, oldName, newName) {
  if (!node.sourceSpan) return null;

  const start = node.sourceSpan.start.offset;
  const end = node.sourceSpan.end.offset;
  const text = sourceCode.getText().slice(start, end);

  // Replace the attribute name while preserving any value
  const fixedText = text.replace(oldName, newName);

  return fixer.replaceTextRange([start, end], fixedText);
}

export default matButtonCamelCaseRule;

