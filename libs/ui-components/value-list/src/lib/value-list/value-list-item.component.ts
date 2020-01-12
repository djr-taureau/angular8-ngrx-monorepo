//tslint:disable:dw-value-list-header use-host-property-decorator
import {
	Component,
	Directive,
	ViewEncapsulation,
	ChangeDetectionStrategy
} from '@angular/core';

@Component({
	selector: 'dw-value-list-item, [dwValueListItem]',
	templateUrl: './value-list-item.component.html',
	host: { class: 'dw-value-list-item' },
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueListItemComponent {}

@Directive({
	selector: 'dw-value-list-item-index, [dwValueListItemIndex]',
	host: { class: 'dw-value-list-item-index' }
})
export class ValueListItemIndexDirective {}

@Directive({
	selector: 'dw-value-list-item-text, [dwValueListItemText]',
	host: { class: 'dw-value-list-item-text' }
})
export class ValueListItemTextDirective {}

@Directive({
	selector: 'dw-value-list-item-value, [dwValueListItemValue]',
	host: { class: 'dw-value-list-item-value' }
})
export class ValueListItemValueDirective {}
