import { NgModule } from '@angular/core';
import { LibCoreModule, LibUIModule } from './+modules';

import {
	SectionTitleComponent,
	SectionSubtitleDirective
} from './section-title/section-title.component';
import {
	SectionComponent,
	SectionHeaderDirective,
	SectionFooterDirective,
	SectionContentDirective
} from './section/section.component';
import { PageComponent } from './page/page.component';
import { ControlBarComponent, ControlBarControlDirective } from './control-bar/control-bar.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { BadgeComponent } from './badge/badge.component';

const COMPONENTS = [
	SectionTitleComponent,
	SectionSubtitleDirective,
	SectionComponent,
	SectionHeaderDirective,
	SectionFooterDirective,
	PageComponent,
	ControlBarComponent,
	ControlBarControlDirective,
	PaginatorComponent,
	SectionContentDirective,
	BadgeComponent
];

@NgModule({
	imports: [LibCoreModule, LibUIModule],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class UiComponentsLayoutsModule {}
