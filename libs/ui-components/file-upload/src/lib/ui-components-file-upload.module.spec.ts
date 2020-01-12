import { async, TestBed } from '@angular/core/testing';
import { UiComponentsFileUploadModule } from './ui-components-file-upload.module';

describe('UiComponentsFileUploadModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsFileUploadModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsFileUploadModule).toBeDefined();
	});
});
