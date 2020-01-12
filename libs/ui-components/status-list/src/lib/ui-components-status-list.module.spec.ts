import { async, TestBed } from '@angular/core/testing';
import { UiComponentsStatusListModule } from './ui-components-status-list.module';

describe('UiComponentsStatusListModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsStatusListModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsStatusListModule).toBeDefined();
	});
});
