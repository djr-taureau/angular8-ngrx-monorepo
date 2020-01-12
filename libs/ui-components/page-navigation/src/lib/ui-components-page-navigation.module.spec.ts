import { async, TestBed } from '@angular/core/testing';
import { UiComponentsPageNavigationModule } from './ui-components-page-navigation.module';

describe('UiComponentsPageNavigationModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsPageNavigationModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsPageNavigationModule).toBeDefined();
	});
});
