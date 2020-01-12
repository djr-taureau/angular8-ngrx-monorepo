import { breadcrumb } from './breadcrumb';

// tslint:disable-next-line:class-name
export interface breadcrumbRender {
	mainItems: breadcrumb[];
	dropdownItems: breadcrumb[];
	count: number;
}
