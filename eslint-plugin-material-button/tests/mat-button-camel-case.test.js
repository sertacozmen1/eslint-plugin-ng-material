import test from 'node:test';
import { RuleTester } from 'eslint';
import templateParser from '@angular-eslint/template-parser';

import rule from '../lib/rules/mat-button-camel-case.js';

test('mat-button-camel-case rule', () => {
  const ruleTester = new RuleTester({
    languageOptions: {
      parser: templateParser,
    },
  });

  ruleTester.run('mat-button-camel-case', rule, {
    valid: [
      {
        code: '<button matButton>Save</button>',
      },
      {
        code: '<button matIconButton>Save</button>',
      },
      {
        code: '<button matButton="elevated">Save</button>',
      },
      {
        code: '<button matButton="filled">Save</button>',
      },
      {
        code: '<button matButton="outlined">Save</button>',
      },
    ],
    invalid: [
      {
        code: '<button mat-button>Save</button>',
        output: '<button matButton>Save</button>',
        errors: [{ messageId: 'useMatButton' }],
      },
      {
        code: '<button mat-icon-button>Save</button>',
        output: '<button matIconButton>Save</button>',
        errors: [{ messageId: 'useMatIconButton' }],
      },
      {
        code: '<button mat-raised-button>Save</button>',
        output: '<button matButton="elevated">Save</button>',
        errors: [{ messageId: 'useMatButtonElevated' }],
      },
      {
        code: '<button mat-flat-button>Save</button>',
        output: '<button matButton="filled">Save</button>',
        errors: [{ messageId: 'useMatButtonFilled' }],
      },
      {
        code: '<button mat-stroked-button>Save</button>',
        output: '<button matButton="outlined">Save</button>',
        errors: [{ messageId: 'useMatButtonOutlined' }],
      },
    ],
  });
});
