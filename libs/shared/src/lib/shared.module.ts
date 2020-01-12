import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BadgeModule,
  TopbarModule,
  ButtonModule,
  ListItemModule
} from '@momentum-ui/angular';
import { NiceDatePipe } from './date';
import { ReplacePipe, AddressPipe, PhonePipe } from './text';

// const COMPONENTS = [];
const PIPES = [NiceDatePipe, ReplacePipe, AddressPipe, PhonePipe]
const SHARED_MODULES = [TopbarModule, ButtonModule, ListItemModule];

@NgModule({
  declarations: [PIPES],
  imports: [CommonModule, SHARED_MODULES],
  exports: [SHARED_MODULES, PIPES]
})
export class SharedModule {}
