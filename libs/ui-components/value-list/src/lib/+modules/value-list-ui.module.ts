import { NgModule } from '@angular/core';
import { UiComponentsCoreModule } from '@ngprojects/ui-components/core';

const MODULES = [UiComponentsCoreModule];

@NgModule({
	imports: [MODULES],
	exports: [MODULES]
})
export class ValueListUIModule {}
