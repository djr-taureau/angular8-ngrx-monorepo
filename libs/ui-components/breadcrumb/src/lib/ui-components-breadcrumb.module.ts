import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	BreadcrumbComponent,
	BreadcrumbLocationDirective,
	BreadcrumbDropdownDirective
} from './breadcrumb/breadcrumb.component';
import { BreadcrumbIconComponent } from './breadcrumb-icon/breadcrumb-icon.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [CommonModule, MatMenuModule, RouterModule],
	declarations: [
		BreadcrumbComponent,
		BreadcrumbIconComponent,
		BreadcrumbLocationDirective,
		BreadcrumbDropdownDirective
	],
	exports: [
		BreadcrumbComponent,
		BreadcrumbLocationDirective,
		BreadcrumbDropdownDirective,
		BreadcrumbIconComponent,
		MatMenuModule
	]
})
export class UiComponentsBreadcrumbModule {}
