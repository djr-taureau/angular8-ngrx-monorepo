import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { classWithModifiers } from '@lifeworks/common';

@Component({
	selector: 'dw-value-callout-footer',
	templateUrl: './value-callout-footer.component.html',
	styleUrls: ['./value-callout-footer.component.scss']
})
export class DashboardOverviewFooterComponent implements OnInit {
	@Input() arrow: string;
	elementName = 'dw-value-callout-footer';

	constructor() {}

	@HostBinding('class') classes = '';

	ngOnInit() {
		this.classes = classWithModifiers(this.elementName, this.arrow);
	}
}
