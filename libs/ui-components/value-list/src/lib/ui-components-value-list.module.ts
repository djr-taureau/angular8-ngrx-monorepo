import { NgModule } from '@angular/core';
import { ValueListCoreModule, ValueListUIModule } from './+modules';

import {
	ValueListComponent,
	ValueListHeaderComponent,
	ValueListItemComponent,
	ValueListHeaderIconDirective,
	ValueListHeaderTitleDirective,
	ValueListHeaderColumnDirective,
	ValueListItemIndexDirective,
	ValueListItemTextDirective,
	ValueListItemValueDirective
} from './value-list';

@NgModule({
	imports: [ValueListCoreModule, ValueListUIModule],
	declarations: [
		ValueListComponent,
		ValueListHeaderComponent,
		ValueListItemComponent,
		ValueListHeaderIconDirective,
		ValueListHeaderTitleDirective,
		ValueListHeaderColumnDirective,
		ValueListItemIndexDirective,
		ValueListItemTextDirective,
		ValueListItemValueDirective
	],
	exports: [
		ValueListComponent,
		ValueListHeaderComponent,
		ValueListItemComponent,
		ValueListHeaderIconDirective,
		ValueListHeaderTitleDirective,
		ValueListHeaderColumnDirective,
		ValueListItemIndexDirective,
		ValueListItemTextDirective,
		ValueListItemValueDirective
	]
})
export class UiComponentsValueListModule {}
