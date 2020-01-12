import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const MODULES = [CommonModule];

@NgModule({
	imports: [MODULES],
	exports: [MODULES]
})
export class ValueListCoreModule {}
