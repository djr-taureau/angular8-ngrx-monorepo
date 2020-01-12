import { async, TestBed } from '@angular/core/testing';
import { UiComponentsWidgetModule } from './ui-components-widget.module';

describe('UiComponentsWidgetModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsWidgetModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsWidgetModule).toBeDefined();
	});
});
