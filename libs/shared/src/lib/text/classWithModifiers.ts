import { map, join, head, isNil } from 'ramda';

const addModifier = (base: string) => (modifier: string) =>
	`${base}-${modifier}`;

const isInvalidArray = (array: Array<any>) => isNil(head(array));

export const classWithModifiers = (
	componentName: string,
	...classes: string[]
): string => {
	if (isInvalidArray(classes)) {
		return componentName;
	}
	return join(' ', [
		componentName,
		...map(addModifier(componentName), classes)
	]);
};
