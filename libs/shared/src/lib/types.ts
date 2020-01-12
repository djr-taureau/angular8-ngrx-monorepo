/**
 * Type for Constructor Functions
 */
export type Constructor<T> = new (...args: any[]) => T;

/**
 * Type for Angular Router Links
 */
export type NavigationLink = string | any[];

export type NavigationItems = Array<NavigationItem>;

export interface NavigationItem {
	display?: string;
	order: number;
	count?: number;
	icon?: string;
	location?: NavigationLink;
	queryParams?: {};
	children?: NavigationItem[];
	action?: string;
	cssClass?: string;
}