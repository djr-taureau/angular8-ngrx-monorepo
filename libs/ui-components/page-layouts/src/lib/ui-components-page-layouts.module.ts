import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutsCoreModule } from './+modules';
import {
	PageViewComponent,
	PageViewHeaderDirective,
	PageViewContentDirective,
	PageViewMenuDirective
} from './components';

@NgModule({
	imports: [CommonModule, PageLayoutsCoreModule],
	declarations: [
		PageViewComponent,
		PageViewHeaderDirective,
		PageViewContentDirective,
		PageViewMenuDirective
	],
	exports: [
		PageViewComponent,
		PageViewHeaderDirective,
		PageViewContentDirective,
		PageViewMenuDirective
	]
})
export class UiComponentsPageLayoutsModule {}
