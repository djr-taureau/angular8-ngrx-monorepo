import { NgModule } from '@angular/core';
import { PageNavigationCoreModule, PageNavigationUIModule } from './+modules';

import { PageNavigationComponent } from './components';

@NgModule({
	imports: [PageNavigationCoreModule, PageNavigationUIModule],
	declarations: [PageNavigationComponent],
	exports: [PageNavigationComponent, PageNavigationUIModule]
})
export class UiComponentsPageNavigationModule {}
