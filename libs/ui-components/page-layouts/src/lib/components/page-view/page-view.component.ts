//tslint:disable:use-host-property-decorator
import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'dw-page-view',
	templateUrl: './page-view.component.html',
	styleUrls: ['./page-view.component.scss'],
	encapsulation: ViewEncapsulation.None,
	host: { class: 'dw-page-view' }
})
export class PageViewComponent {}

@Directive({
	selector: 'dw-page-view-header, [dwPageViewHeader]',
	host: { class: 'dw-page-view-header' }
})
export class PageViewHeaderDirective {}

@Directive({
	selector: 'dw-page-view-menu, [dwPageViewMenu]',
	host: { class: 'dw-page-view-menu' }
})
export class PageViewMenuDirective {}

@Directive({
	selector: 'dw-page-view-content, [dwPageViewContent]',
	host: { class: 'dw-page-view-content' }
})
export class PageViewContentDirective {}
