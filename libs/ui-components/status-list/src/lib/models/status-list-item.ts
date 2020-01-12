import { NavigationLink } from '@ngprojects/shared';

export type StatusListItems = Array<StatusListItem>;

export type Status = 'Not Started' | 'In Progress' | 'Complete';

export interface StatusListItem {
	display?: string;
	order: number;
	location: NavigationLink;
	collapsed?: boolean;
	status?: Status;
	children?: StatusListItems;
}
