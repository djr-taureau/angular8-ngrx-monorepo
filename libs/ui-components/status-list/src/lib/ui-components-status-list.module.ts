import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusListCollapsibleComponent } from './status-list-collapsible/status-list-collapsible.component';
import { StatusListStatusComponent } from './status-list-status/status-list-status.component';
import { StatusListItemComponent } from './status-list-item/status-list-item.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material';
@NgModule({
	imports: [CommonModule, RouterModule, MatTabsModule],
	declarations: [
		StatusListComponent,
		StatusListCollapsibleComponent,
		StatusListStatusComponent,
		StatusListItemComponent
	],
	exports: [
		StatusListComponent,
		StatusListCollapsibleComponent,
		StatusListStatusComponent,
		StatusListItemComponent
	]
})
export class UiComponentsStatusListModule {}
