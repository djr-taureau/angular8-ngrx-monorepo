import { async, TestBed } from '@angular/core/testing';
import { UiComponentsValueCalloutModule } from './ui-components-value-callout.module';

describe('UiComponentsValueCalloutModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsValueCalloutModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsValueCalloutModule).toBeDefined();
	});
});
