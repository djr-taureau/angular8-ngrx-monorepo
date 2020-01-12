import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverviewEmphasisComponent } from './value-callout-emphasis.component';

describe('DashboardOverviewEmphasisComponent', () => {
	let component: DashboardOverviewEmphasisComponent;
	let fixture: ComponentFixture<DashboardOverviewEmphasisComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DashboardOverviewEmphasisComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardOverviewEmphasisComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
