import { async, TestBed } from '@angular/core/testing';
import { UiComponentsBreadcrumbModule } from './ui-components-breadcrumb.module';

describe('UiComponentsBreadcrumbModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsBreadcrumbModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsBreadcrumbModule).toBeDefined();
	});
});
