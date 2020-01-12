import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttachmentComponent } from './attachment/attachment.component';

import { UiComponentsButtonsModule } from '@ngprojects/ui-components/buttons';

@NgModule({
	imports: [
		CommonModule,
		UiComponentsButtonsModule
	],
	declarations: [AttachmentComponent],
	exports: [AttachmentComponent]
})
export class UiComponentsAttachmentModule {}
