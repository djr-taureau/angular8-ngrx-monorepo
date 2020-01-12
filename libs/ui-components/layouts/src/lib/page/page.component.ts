//tslint:disable:use-host-property-decorator
import {
	Component,
	ViewEncapsulation,
	HostBinding,
	Input,
	OnInit,
	OnDestroy
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { has, prop, is } from 'ramda';
import { Subject } from 'rxjs';
import "rxjs/operator/filter";
import { takeUntil, map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

export type PageLayout = 'full' | 'almost-full' | 'fullWithLeftSidebar' | 'detailWithLeftSidebar' | null | '';

const ROUTE_DATA_PAGE_LAYOUT = 'pageLayout';
const isEndOfNavigation = is(NavigationEnd);

@Component({
	selector: 'dw-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss'],
	encapsulation: ViewEncapsulation.None,
	host: { class: 'dw-page' }
})
export class PageComponent implements OnDestroy {
	private unsubscribe: Subject<void> = new Subject();
	@Input() pageLayout: string;

	@HostBinding('class.full-page')
	get fullLayout() {
		return this.pageLayout === 'full';
	}

	@HostBinding('class.fullWithLeftSidebar')
	get fullWithLeftSidebar() {
		return this.pageLayout === 'fullWithLeftSidebar';
	}

	@HostBinding('class.almostFullWithLeftSidebar')
	get almostFullWithLeftSidebar() {
		return this.pageLayout === 'almostFullWithLeftSidebar';
  }

  @HostBinding('class.detailWithLeftSidebar')
	get detailWithLeftSidebar() {
		return this.pageLayout === 'detailWithLeftSidebar';
	}

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {
		this.listenForPageLayout();
	}

	listenForPageLayout() {
		this.router.events
		.pipe(takeUntil(this.unsubscribe))
		.subscribe(event => {
			if (isEndOfNavigation(event)) {
				let child = this.activatedRoute.firstChild;
				while (child) {
					if (child.firstChild) {
						child = child.firstChild;
					} else if (has(ROUTE_DATA_PAGE_LAYOUT, child.snapshot.data)) {
						return prop(ROUTE_DATA_PAGE_LAYOUT, child.snapshot.data)
					} else {
						return null;
					}
				}
				return null;
			}
		});
	}

	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
}
