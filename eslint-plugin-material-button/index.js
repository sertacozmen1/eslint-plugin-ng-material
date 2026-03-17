import matButtonCamelCaseRule from './lib/rules/mat-button-camel-case.js';

const plugin = {
	meta: {
		name: 'eslint-plugin-ng-material',
		version: '1.0.0',
	},
	rules: {
		'mat-button-camel-case': matButtonCamelCaseRule,
	},
	configs: {
		recommended: {
			rules: {
				'ng-material/mat-button-camel-case': 'error',
			},
		},
	},
};

export default plugin;
export const rules = plugin.rules;
export const configs = plugin.configs;
