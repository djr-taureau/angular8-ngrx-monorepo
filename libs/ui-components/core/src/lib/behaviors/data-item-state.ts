import { Constructor } from '@ngprojects/shared';
import { HasCssModifiers } from './css-modifiers';

export interface HasDataItemState<T> {
	/** The State of the item */
	itemState: string;
	item: T;
}

/** Mixin to augment a directive with a `disabled` property. */
export function mixinDateItemState<T extends Constructor<HasCssModifiers>>(
	base: T
): Constructor<HasDataItemState<any>> & T {
	return class extends base {
		private _itemState: string;
		private _item: any;

		get item() {
			return this._item;
		}
		set item(value: T) {
			this.processItemState(value);
		}

		set itemState(value: any) {
			const futureState = value;
			this._updateCssClass('data-item-is', this._itemState, futureState);
			if (this._isNewCssClass(this._itemState, futureState)) {
				this._itemState = futureState;
			}
		}

		private processItemState(value: any) {
			if (value._ui_isRemoving) {
				this.itemState = 'removing';
			}
			this._item = value;
		}

		constructor(...args: any[]) {
			super(...args);
		}
	};
}
