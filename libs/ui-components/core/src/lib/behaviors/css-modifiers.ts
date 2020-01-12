import { ElementRef } from '@angular/core';
import { Constructor } from '@ngprojects/shared';

export interface HasElementRef {
	_elementRef: ElementRef;
}

export interface HasCssModifiers extends HasElementRef {
	_hasHostAttributes(...attributes: string[]): boolean;
	_getHostElement(): HTMLElement;
	_removeCssClass(className: string): void;
	_addCssClass(className: string): void;
	_updateCssClass(prefix: string, current: string, future: string): void;
	_isNewCssClass(current: string, future: string): boolean;
	_addAttributeClasses(attributes: Array<string>): void;
}

/** Mixin to augment a directive with a `disabled` property. */
export function mixinCssModifiers<T extends Constructor<HasElementRef>>(
	base: T
): Constructor<HasCssModifiers> & T {
	return class extends base {
		/** Gets whether the button has one of the given attributes. */
		_hasHostAttributes(...attributes: string[]) {
			return attributes.some(attribute =>
				this._getHostElement().hasAttribute(attribute)
			);
		}

		_getHostElement(): HTMLElement {
			return this._elementRef.nativeElement;
		}

		_removeCssClass(className: string) {
			this._getHostElement().classList.remove(className);
		}

		_addCssClass(className: string) {
			this._getHostElement().classList.add(className);
		}

		_updateCssClass(prefix: string, current: string, future: string) {
			if (this._isNewCssClass(current, future)) {
				if (current) {
					this._removeCssClass(`${prefix}-${current}`);
				}
				if (future) {
					this._addCssClass(`${prefix}-${future}`);
				}
			}
		}

		_isNewCssClass(current: string, future: string) {
			return future !== current;
		}

		_addAttributeClasses(attributes: Array<string>) {
			for (const attr of attributes) {
				if (this._hasHostAttributes(attr)) {
					this._addCssClass(attr);
				}
			}
		}

		constructor(...args: any[]) {
			super(...args);
		}
	};
}
