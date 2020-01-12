import { NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { LibCoreModule, LibUIModule } from '../+modules';

const MODULES = [LibCoreModule, LibUIModule, BrowserDynamicTestingModule];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class LibTestingModule {}
