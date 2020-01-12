import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsCoreModule } from '@ngprojects/ui-components/core';

import {
	WidgetComponent,
	WidgetHeaderComponent,
	WidgetContentDirective,
	WidgetTitleDirective,
	WidgetSubtitleDirective,
	WidgetLinkDirective
} from './components';

@NgModule({
	imports: [CommonModule, UiComponentsCoreModule],
	declarations: [
		WidgetComponent,
		WidgetHeaderComponent,
		WidgetContentDirective,
		WidgetTitleDirective,
		WidgetSubtitleDirective,
		WidgetLinkDirective
	],
	exports: [
		WidgetComponent,
		WidgetHeaderComponent,
		WidgetContentDirective,
		WidgetTitleDirective,
		WidgetSubtitleDirective,
		WidgetLinkDirective
	]
})
export class UiComponentsWidgetModule {}
