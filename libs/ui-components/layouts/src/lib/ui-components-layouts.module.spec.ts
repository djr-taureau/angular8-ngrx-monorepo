import { async, TestBed } from '@angular/core/testing';
import { UiComponentsLayoutsModule } from './ui-components-layouts.module';

describe('UiComponentsLayoutsModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsLayoutsModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsLayoutsModule).toBeDefined();
	});
});
