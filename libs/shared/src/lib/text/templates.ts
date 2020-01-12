import { reduce, map, replace, uniq, match, prop } from 'ramda';

import { flattenObj } from '../utility/object';
import { Obj } from '../models';
import { removeFromString } from './manipulation';

const TOKEN_BRACKETS = /({{|}})/g;
const removeTokenBraces = removeFromString(TOKEN_BRACKETS);

const TOKEN_SLUG = /{{(.*?)}}/g;
const findTokens = match(TOKEN_SLUG);

export type TokenValueModifierFn = (
	value: any,
	slug: string,
	source: Obj
) => any;

/**
 * Build a RegEx to find the supplied slug
 */
const tokenSlug = (slug: string) => new RegExp(`{{${slug}}}`, 'g');

/**
 * Build an array of token keys without the token indicators
 */
const getTokens = (tokens: string) =>
	map(removeTokenBraces, uniq(findTokens(tokens)));

/**
 * Build the replacement value for a slug based upon the source object
 * and then processed with the modifers
 */
// const tokenValue = (
// 	slug: string,
// 	source: Obj,
// 	modifiers: Array<TokenValueModifierFn> = []
// ) =>
// 	reduce(
// 		(value, modifier) => modifier(value, slug, source),
// 		prop(slug, source),
// 		modifiers
// 	);

/**
 * replaces a token in the supplied template using values from the source Object
 */
// const replaceTokens = (
// 	source: Obj,
// 	modifiers: Array<TokenValueModifierFn> = []
// ) => (template: string, slug: string) =>
// 	replace(tokenSlug(slug), tokenValue(slug, source, modifiers), template);

/**
 * Replaces all of the tokens in a template with the values
 * supplied by the ValueObject
 */
// export const hydrateTemplate = (
// 	template: string,
// 	valueObject: Object,
// 	modifiers: Array<TokenValueModifierFn> = []
// ) =>
// 	reduce(
// 		replaceTokens(flattenObj(valueObject), modifiers),
// 		template,
// 		getTokens(template)
// 	);
