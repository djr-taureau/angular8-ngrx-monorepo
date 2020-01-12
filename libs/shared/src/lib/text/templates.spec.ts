import { hydrateTemplate } from './templates';
import { toUpper } from 'ramda';

const TEST_SOURCE = {
	guid: '424242-424242-4242',
	target: {
		name: '[target name]'
	},
	source: {
		entity: {
			name: '[source entity name]'
		}
	}
};

const TEST_MESSAGE =
	'{{guid}} - test message - from {{target.name}} - for {{source.entity.name}} - {{guid}}';

describe('templates', () => {
	it('should replace tokens', () => {
		const message = hydrateTemplate(TEST_MESSAGE, TEST_SOURCE);
		expect(message).toBe(
			'424242-424242-4242 - test message - from [target name] - for [source entity name] - 424242-424242-4242'
		);
	});

	it('should modify token values', () => {
		const message = hydrateTemplate(TEST_MESSAGE, TEST_SOURCE, [
			(value, slug, source) => toUpper(value)
		]);
		expect(message).toBe(
			'424242-424242-4242 - test message - from [TARGET NAME] - for [SOURCE ENTITY NAME] - 424242-424242-4242'
		);
	});
});
