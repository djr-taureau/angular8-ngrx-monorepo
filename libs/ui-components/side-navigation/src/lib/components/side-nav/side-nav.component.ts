//tslint:disable: use-host-property-decorator directive-selector
import { Component, OnInit, Directive, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'dw-side-nav',
	template: '<ng-content></ng-content>',
	styleUrls: ['./side-nav.component.scss'],
	host: { class: 'dw-side-nav' },
	encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}

@Directive({
	selector: 'dw-navigation-group',
	host: { class: 'dw-navigation-group' }
})
export class NavigationGroupDirective {}

@Directive({
	selector: 'dw-navigation-title',
	host: { class: 'dw-navigation-title' }
})
export class NavigationTitleDirective {}
