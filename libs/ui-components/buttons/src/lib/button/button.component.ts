//tslint:disable:component-selector use-host-property-decorator use-input-property-decorator
import {
	Component,
	OnInit,
	ElementRef,
	ViewEncapsulation,
	ChangeDetectionStrategy
} from '@angular/core';
import {
	HasColor,
	mixinColor,
	ComponentHostBase
} from '@ngprojects/ui-components/core';

export const _ButtonComponentBase = mixinColor(ComponentHostBase);

/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 */
const BUTTON_HOST_ATTRIBUTES = [
	'dw-button',
	'dw-rounded-button',
	'dw-round-button',
	'dw-icon-button',
	'dw-text-button'
];

@Component({
	selector:
		'button[dw-button],button[dw-icon-button],button[dw-rounded-button],button[dw-round-button],button[dw-text-button]',
	exportAs: 'dwButton',
	host: {
		'[disabled]': 'disabled || null'
	},
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	inputs: ['disabled', 'color'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent extends _ButtonComponentBase implements HasColor {
	constructor(elementRef: ElementRef) {
		super(elementRef);

		this._addAttributeClasses(BUTTON_HOST_ATTRIBUTES);
	}

	focus(): void {
		this._getHostElement().focus();
	}
}
