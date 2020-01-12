import { async, TestBed } from '@angular/core/testing';
import { UiComponentsIconsModule } from './ui-components-icons.module';

describe('UiComponentsIconsModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsIconsModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsIconsModule).toBeDefined();
	});
});
