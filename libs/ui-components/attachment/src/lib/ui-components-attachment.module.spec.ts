import { async, TestBed } from '@angular/core/testing';
import { UiComponentsAttachmentModule } from './ui-components-attachment.module';

describe('UiComponentsAttachmentModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsAttachmentModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsAttachmentModule).toBeDefined();
	});
});
