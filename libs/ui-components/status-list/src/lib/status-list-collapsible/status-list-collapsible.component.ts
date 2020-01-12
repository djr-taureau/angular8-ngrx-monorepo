import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'dw-status-list-collapsible',
	templateUrl: './status-list-collapsible.component.html',
	styleUrls: ['./status-list-collapsible.component.scss']
})
export class StatusListCollapsibleComponent implements OnInit {
	@Input() collapsed: boolean;

	constructor() {}

	ngOnInit() {}
}
