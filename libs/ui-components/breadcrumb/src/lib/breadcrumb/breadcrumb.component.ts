//tslint:disable: use-host-property-decorator directive-selector
import {
	Component,
	Directive,
	ViewEncapsulation,
	OnChanges,
	Input,
	OnInit
} from '@angular/core';
import { comparator, sort, dissocPath, clone } from 'ramda';
import { breadcrumb, breadcrumbRender } from '../models';

@Component({
	selector: 'dw-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
	host: { class: 'dw-breadcrumb' },
	encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnChanges, OnInit {
	@Input() data;

	characterCount = 30;
	accumulator: breadcrumbRender = {
		mainItems: [],
		dropdownItems: [],
		count: 0
	};
	dropdownItems;
	mainItems;
	byOrder = comparator((a: breadcrumb, b: breadcrumb) => a.order > b.order);

	constructor() {}

	getDropdownItems(): breadcrumb[] {
		return this.breadcrumbsToRender(this.data).dropdownItems;
	}

	getMainItems(): breadcrumb[] {
		return this.breadcrumbsToRender(this.data).mainItems;
	}

	breadcrumbsToRender(data: breadcrumb[]) {
		const populateBreadcrumbItems = (
			current: breadcrumbRender,
			singleBreadcrumb: breadcrumb
		) => {
			if (current.count < this.characterCount) {
				current.mainItems.unshift(singleBreadcrumb);
			} else {
				current.dropdownItems.push(singleBreadcrumb);
			}
			current.count += singleBreadcrumb.display.length;
			return current;
		};
		const preparedBreadcrumbs: breadcrumb[] = dissocPath(
			[0, 'location'],
			sort(this.byOrder, data)
		);
		return preparedBreadcrumbs.reduce(
			populateBreadcrumbItems,
			clone(this.accumulator)
		);
	}

	ngOnChanges() {
		this.dropdownItems = this.getDropdownItems();
		this.mainItems = this.getMainItems();
	}

	ngOnInit() {}
}

@Directive({
	selector: 'dw-breadcrumb-location',
	host: { class: 'dw-breadcrumb-location' }
})
export class BreadcrumbLocationDirective {}

@Directive({
	selector: 'dw-breadcrumb-dropdown',
	host: { class: 'dw-breadcrumb-dropdown dw-elevation-1' }
})
export class BreadcrumbDropdownDirective {}
