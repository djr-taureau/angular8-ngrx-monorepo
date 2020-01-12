import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSearchComponent } from './navigation-search.component';

describe('NavigationSearchComponent', () => {
	let component: NavigationSearchComponent;
	let fixture: ComponentFixture<NavigationSearchComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [NavigationSearchComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NavigationSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
