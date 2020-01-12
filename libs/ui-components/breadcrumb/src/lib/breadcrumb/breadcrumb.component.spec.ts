import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
	BreadcrumbComponent,
	BreadcrumbLocationDirective,
	BreadcrumbDropdownDirective
} from './breadcrumb.component';
import { BreadcrumbIconComponent } from '../breadcrumb-icon/breadcrumb-icon.component';

describe('BreadcrumbComponent', () => {
	let component: BreadcrumbComponent;
	let fixture: ComponentFixture<BreadcrumbComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					BreadcrumbComponent,
					BreadcrumbIconComponent,
					BreadcrumbLocationDirective,
					BreadcrumbDropdownDirective
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(BreadcrumbComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
