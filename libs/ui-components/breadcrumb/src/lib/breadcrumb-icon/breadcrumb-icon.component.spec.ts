import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbIconComponent } from './breadcrumb-icon.component';

describe('BreadcrumbIconComponent', () => {
	let component: BreadcrumbIconComponent;
	let fixture: ComponentFixture<BreadcrumbIconComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [BreadcrumbIconComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(BreadcrumbIconComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
