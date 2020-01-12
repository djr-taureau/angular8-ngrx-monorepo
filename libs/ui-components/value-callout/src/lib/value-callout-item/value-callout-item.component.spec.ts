import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverviewValueCalloutComponent } from './value-callout-item.component';

describe('DashboardOverviewItemComponent', () => {
	let component: DashboardOverviewValueCalloutComponent;
	let fixture: ComponentFixture<DashboardOverviewValueCalloutComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DashboardOverviewValueCalloutComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(
			DashboardOverviewValueCalloutComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
