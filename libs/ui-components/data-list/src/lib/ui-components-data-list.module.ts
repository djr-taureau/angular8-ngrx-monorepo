import { NgModule } from '@angular/core';
import { DataListCoreModule } from './+modules';

import {
	DataListComponent,
	DataListItemHeaderDirective,
	DataListItemActionDirective
} from './data-list/data-list.component';
import { DataListItemComponent } from './data-list-item/data-list-item.component';
import { DataListItemIconComponent } from './data-list-item-icon/data-list-item-icon.component';

@NgModule({
	imports: [DataListCoreModule],
	declarations: [
		DataListComponent,
		DataListItemComponent,
		DataListItemHeaderDirective,
		DataListItemActionDirective,
		DataListItemIconComponent
	],
	exports: [
		DataListItemComponent,
		DataListComponent,
		DataListItemHeaderDirective,
		DataListItemActionDirective
	]
})
export class UiComponentsDataListModule {}
