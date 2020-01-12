//tslint:disable:use-host-property-decorator use-input-property-decorator
import { Directive, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import {
	TextColorPalette,
	mixinTextColor,
	HasColor,
	ComponentHostBase
} from '@ngprojects/ui-components/core';

const DEFAULT_SUBTITLE_COLOR = 'orange';

export const _WidgetTitleBase = mixinTextColor(ComponentHostBase);

@Directive({
	selector: 'dw-widget-title, [dwWidgetTitle]',
	inputs: ['color'],
	host: { class: 'dw-widget-title' }
})
export class WidgetTitleDirective extends _WidgetTitleBase implements HasColor {
	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}

export const _WidgetSubtitleBase = mixinTextColor(
	ComponentHostBase,
	DEFAULT_SUBTITLE_COLOR
);
@Directive({
	selector: 'dw-widget-subtitle, [dwWidgetSubtitle]',
	inputs: ['color'],
	host: { class: 'dw-widget-subtitle' }
})
export class WidgetSubtitleDirective extends _WidgetSubtitleBase
	implements HasColor {
	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}
