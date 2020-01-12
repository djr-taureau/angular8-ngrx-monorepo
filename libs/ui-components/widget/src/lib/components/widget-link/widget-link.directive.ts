//tslint:disable:use-host-property-decorator
import { Directive } from '@angular/core';

@Directive({
	selector: '[dwWidgetLink]',
	host: { class: 'dw-widget-link' }
})
export class WidgetLinkDirective {}
