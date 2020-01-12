//tslint:disable:dw-value-list-header use-host-property-decorator
import {
	Component,
	Directive,
	ViewEncapsulation,
	ChangeDetectionStrategy
} from '@angular/core';

@Component({
	selector: 'dw-value-list-header, [dwValueListHeader]',
	templateUrl: './value-list-header.component.html',
	host: { class: 'dw-value-list-header' },
	encapsulation: ViewEncapsulation.None
})
export class ValueListHeaderComponent {}

@Directive({
	selector: 'dw-value-list-header-icon, [dwValueListHeaderIcon]',
	host: { class: 'dw-value-list-header-icon' }
})
export class ValueListHeaderIconDirective {}

@Directive({
	selector: 'dw-value-list-header-title, [dwValueListHeaderTitle]',
	host: { class: 'dw-value-list-header-title' }
})
export class ValueListHeaderTitleDirective {}

@Directive({
	selector: 'dw-value-list-header-column, [dwValueListHeaderColumn]',
	host: { class: 'dw-value-list-header-column' }
})
export class ValueListHeaderColumnDirective {}
