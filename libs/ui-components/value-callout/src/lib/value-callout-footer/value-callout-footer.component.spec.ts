import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverviewFooterComponent } from './value-callout-footer.component';

describe('DashboardOverviewFooterComponent', () => {
	let component: DashboardOverviewFooterComponent;
	let fixture: ComponentFixture<DashboardOverviewFooterComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DashboardOverviewFooterComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardOverviewFooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
