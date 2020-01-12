import {
	Constructor,
	NavigationLink,
	isNotUseable,
	isFalse
} from '@ngprojects/shared';

export interface HasNavigation {
	location: NavigationLink;
	wrapWithAnchor: boolean;
	readonly renderAs: string;
}

export enum renderAsType {
	action,
	displayOnly,
  location,
  actionLocation
}

/** Mixin to add a `wrapWithAnchor` and `location` properties to a directive or component. */
export function mixinNavigation<T extends Constructor<{}>>(
	base: T
): Constructor<HasNavigation> & T {
	return class extends base {
		wrapWithAnchor: boolean;
		location: NavigationLink;
		action: string;

		get renderAs() {
	     if (this.action) {
				return renderAsType[renderAsType.action];
			} else if (this.location) {
        return renderAsType[renderAsType.location];
      }
			return renderAsType[renderAsType.displayOnly];
		}

		constructor(...args: any[]) {
			super(...args);
			this.wrapWithAnchor = true;
		}
	};
}
