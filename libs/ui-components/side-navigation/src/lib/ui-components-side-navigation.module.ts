import { NgModule } from '@angular/core';
import { SideNavigationCoreModule } from './+modules';

import {
	SideNavComponent,
	NavigationGroupDirective,
	NavigationTitleDirective,
	NavigationLogoComponent,
	NavigationSearchComponent,
	NavigationItemComponent
} from './components';

@NgModule({
	imports: [SideNavigationCoreModule],
	declarations: [
		SideNavComponent,
		NavigationLogoComponent,
		NavigationSearchComponent,

		NavigationGroupDirective,
		NavigationTitleDirective,
		NavigationItemComponent
	],
	exports: [
		SideNavComponent,
		NavigationLogoComponent,
		NavigationSearchComponent,

		NavigationGroupDirective,
		NavigationTitleDirective,
		NavigationItemComponent
	]
})
export class UiComponentsSideNavigationModule {}
