//tslint:disable:use-host-property-decorator use-input-property-decorator

import {
	Component,
	ViewEncapsulation,
	ChangeDetectionStrategy,
	ElementRef
} from '@angular/core';
import {
	mixinColor,
	HasColor,
	ComponentHostBase
} from '@ngprojects/ui-components/core';

export const _WidgetHeaderBase = mixinColor(ComponentHostBase);

@Component({
	selector: 'dw-widget-header',
	inputs: ['color'],
	templateUrl: './widget-header.component.html',
	styleUrls: ['./widget-header.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'dw-widget-header' }
})
export class WidgetHeaderComponent extends _WidgetHeaderBase
	implements HasColor {
	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}
