import { NgModule } from '@angular/core';
import {
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatIconModule,
	MatButtonModule,
	MatPaginatorModule
} from '@angular/material';

@NgModule({
	exports: [
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
		MatPaginatorModule
	]
})
export class LibUIModule {}
