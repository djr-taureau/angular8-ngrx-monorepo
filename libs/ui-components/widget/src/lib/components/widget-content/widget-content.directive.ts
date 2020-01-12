//tslint:disable:directive-selector
//tslint:disable:use-host-property-decorator
import { Directive } from '@angular/core';

@Directive({
	selector: '[dwWidgetContent], dw-widget-content,',
	host: { class: 'dw-widget-content' }
})
export class WidgetContentDirective {}
