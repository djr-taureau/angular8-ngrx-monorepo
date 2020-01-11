import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BadgeModule,
  TopbarModule,
  ButtonModule,
  ListItemModule
} from '@momentum-ui/angular';

const SHARED_MODULES = [TopbarModule, ButtonModule, ListItemModule];

@NgModule({
  imports: [CommonModule, ...SHARED_MODULES],
  exports: [...SHARED_MODULES]
})
export class SharedModule {}
