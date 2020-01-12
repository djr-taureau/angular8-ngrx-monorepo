import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationItemComponent } from './navigation-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationItemComponent', () => {
	let component: NavigationItemComponent;
	let fixture: ComponentFixture<NavigationItemComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [RouterTestingModule],
				declarations: [NavigationItemComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NavigationItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
