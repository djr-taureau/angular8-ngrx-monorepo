import { curry } from 'ramda';

export const saveToStorage = curry((key: string, accessToken: string) =>
	localStorage.setItem(key, accessToken)
);

export const retriveFromStorage = (key: string) => localStorage.getItem(key);
