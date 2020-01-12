//tslint:disable: dw-value-list-header use-host-property-decorator
import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'dw-value-list',
	templateUrl: './value-list.component.html',
	styleUrls: ['./value-list.component.scss'],
	host: { class: 'dw-value-list' },
	encapsulation: ViewEncapsulation.None
})
export class ValueListComponent {}
