import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
	SideNavComponent,
	NavigationTitleDirective,
	NavigationGroupDirective
} from './side-nav.component';

describe('NavigationComponent', () => {
	let component: SideNavComponent;
	let fixture: ComponentFixture<SideNavComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					SideNavComponent,
					NavigationTitleDirective,
					NavigationGroupDirective
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SideNavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
