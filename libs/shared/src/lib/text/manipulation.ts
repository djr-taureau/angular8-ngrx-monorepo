import { replace, pipe, split, head } from 'ramda';

/**
 * Remove the suppplied input from a string
 *
 * ```
 * removeFromString('hello')('hello world hello'); // ' world ';
 *
 * removeFromString(/hello/g)('hello world hello'); // ' world ';
 *
 * removeFromString(/hello/)('hello world hello'); // ' world hello';
 * ```
 */
export const removeFromString = (replacement: string | RegExp) =>
	replace(replacement, '');

/**
 * Gets the text that occurces before the supplied token
 */
export const getTextBefore = (token: string) => pipe(split(token), head);
