import { ElementRef } from '@angular/core';
import { Constructor } from '@ngprojects/shared';
import { HasCssModifiers } from './css-modifiers';

export interface HasColor {
	color: ColorPalette;
}

export interface HasIconColor {
	iconColor: IconColorPalette;
}

/** Possible colors for text  */
export type ColorPalette =
	| 'orange'
	| 'green'
	| 'blue'
	| 'dark-green'
	| 'light-green'
	| 'white'
	| 'black'
	| 'grey'
	| 'light-grey';

export type TextColorPalette =
	| 'orange'
	| 'green'
	| 'dark-green'
	| 'light-green'
	| 'white'
	| 'black'
	| 'grey'
	| 'light-grey';

export type IconColorPalette = 'green' | 'orange' | 'white';

/** Mixin to add a `color` property to a directive or component. */
export function mixinColor<T extends Constructor<HasCssModifiers>>(
	base: T,
	defaultColor?: ColorPalette
): Constructor<HasColor> & T {
	return class extends base {
		private _color: ColorPalette;

		get color(): ColorPalette {
			return this._color;
		}
		set color(value: ColorPalette) {
			const colorPalette = value || defaultColor;
			this._updateCssClass('lw-color', this._color, colorPalette);
			if (this._isNewCssClass(this._color, colorPalette)) {
				this._color = colorPalette;
			}
		}

		constructor(...args: any[]) {
			super(...args);
			this.color = defaultColor;
		}
	};
}

/** Mixin to add a `color` property to a directive or component. */
export function mixinTextColor<T extends Constructor<HasCssModifiers>>(
	base: T,
	defaultColor?: TextColorPalette
): Constructor<HasColor> & T {
	return class extends base {
		private _color: TextColorPalette;

		get color(): TextColorPalette {
			return this._color;
		}
		set color(value: TextColorPalette) {
			const colorPalette = value || defaultColor;
			this._updateCssClass('lw-text-color', this._color, colorPalette);
			if (this._isNewCssClass(this._color, colorPalette)) {
				this._color = colorPalette;
			}
		}

		constructor(...args: any[]) {
			super(...args);
			this.color = defaultColor;
		}
	};
}

/** Mixin to add a `color` property to a directive or component. */
export function mixinIconColor<T extends Constructor<HasCssModifiers>>(
	base: T,
	defaultColor?: IconColorPalette
): Constructor<HasIconColor> & T {
	return class extends base {
		private _iconColor: IconColorPalette;

		get iconColor(): IconColorPalette {
			return this._iconColor;
		}
		set iconColor(value: IconColorPalette) {
			const colorPalette = value || defaultColor;
			this._updateCssClass(
				'lw-icon-color',
				this._iconColor,
				colorPalette
			);
			if (this._isNewCssClass(this._iconColor, colorPalette)) {
				this._iconColor = colorPalette;
			}
		}

		constructor(...args: any[]) {
			super(...args);
			this.iconColor = defaultColor;
		}
	};
}
