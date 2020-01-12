import { when, concat } from 'ramda';
import { getTextBefore } from '../text';
import {
	notEmpty,
	whenNotEmpty,
	whenPropIsNotUseable,
	doesNotMatch
} from '../utility';

const HTTP_PROTOCOL_REGEX = /^https?:\/\//i;

const missingHttpProtocol = doesNotMatch(HTTP_PROTOCOL_REGEX);

const getPortString = whenNotEmpty(p => `:${p}`);

const getHostString = (l: Location) =>
	`${l.protocol}//${l.hostname}${getPortString(l.port)}`;

const buildHostString = whenPropIsNotUseable('origin', getHostString);

const buildAbsoluteUrl = concat(buildHostString(window.location));

export const stripeHash = getTextBefore('#');

/**
 * Returns an Absolute url from the given string or the absolute url for the given host
 *
 * ```
 * getFullUrl('/'); // `https://host.com`
 * getFullUrl('https://host.com'); // `https://host.com`
 * getFullUrl('https://host.com:8080'); // `https://host.com:8080`
 * ```
 */
export const getFullUrl = when(missingHttpProtocol, buildAbsoluteUrl);
