import { toBool, Constructor } from '@ngprojects/shared';

export interface CanDisable {
	/** Whether the component is disabled. */
	disabled: boolean;
}

/** Mixin to augment a directive with a `disabled` property. */
export function mixinDisabled<T extends Constructor<{}>>(
	base: T
): Constructor<CanDisable> & T {
	return class extends base {
		private _disabled = false;

		get disabled() {
			return this._disabled;
		}
		set disabled(value: any) {
			this._disabled = toBool(value);
		}

		constructor(...args: any[]) {
			super(...args);
		}
	};
}
