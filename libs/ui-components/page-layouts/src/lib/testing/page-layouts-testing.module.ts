import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
	imports: [
		BrowserDynamicTestingModule,
		CommonModule,
		RouterTestingModule,
		HttpClientTestingModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([])
	],
	exports: [
		BrowserDynamicTestingModule,
		CommonModule,
		RouterTestingModule,
		HttpClientTestingModule,
		StoreModule,
		EffectsModule
	],
	providers: []
})
export class PageLayoutsTestingModule {}
