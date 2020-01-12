import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLogoComponent } from './navigation-logo.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationLogoComponent', () => {
	let component: NavigationLogoComponent;
	let fixture: ComponentFixture<NavigationLogoComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [RouterTestingModule],
				declarations: [NavigationLogoComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NavigationLogoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
