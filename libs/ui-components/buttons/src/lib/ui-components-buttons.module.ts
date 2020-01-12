import { NgModule } from '@angular/core';
import { ButtonsCoreModule } from './+modules/buttons-core.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
	imports: [ButtonsCoreModule],
	declarations: [ButtonComponent],
	exports: [ButtonComponent]
})
export class UiComponentsButtonsModule {}
