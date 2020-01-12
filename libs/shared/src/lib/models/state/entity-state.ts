export const enum LoadDataStatus {
	initial = 'initial',
	loading = 'loading',
	loaded = 'loaded',
	error = 'error',
	empty = 'empty'
}

export type DataState = LoadDataStatus;


export interface Entities<T> {
	[key: string]: T;
}

export interface EntityState<T> {
	status: LoadDataStatus;
	entities: Entities<T>;
}
