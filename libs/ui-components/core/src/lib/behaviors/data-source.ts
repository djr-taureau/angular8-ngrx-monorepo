import { HasCssModifiers } from '.';
import { EventEmitter } from '@angular/core';
import { UIDataItemState, Constructor } from '@ngprojects/shared';

export type DataSourceItemAction = 'remove';

export interface DatasourceItemEvent<T> {
	action: DataSourceItemAction;
	item: T;
}

export type DatasourceItem<T> = T & UIDataItemState;
export type DatasourceItems<T> = DatasourceItem<T>[];

export interface Datasource<T> {
	items: DatasourceItems<T>;
	event: EventEmitter<DatasourceItemEvent<T>>;
	raiseItemEvent(
		action: DataSourceItemAction,
		item?: DatasourceItem<T>,
		$event?: MouseEvent
	);
}

export function mixinDataSource<T extends Constructor<{}>, Y>(
	base: T
): Constructor<Datasource<Y>> & T {
	return class extends base {
		items: DatasourceItems<Y>;
		event: EventEmitter<DatasourceItemEvent<Y>> = new EventEmitter();

		raiseItemEvent(
			action: DataSourceItemAction,
			item: DatasourceItem<Y>,
			$event: MouseEvent
		) {
			this.event.emit({ action, item });
		}

		constructor(...args: any[]) {
			super(...args);
		}
	};
}
