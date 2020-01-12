import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineCaretDirective } from './inline-caret/inline-caret.directive';

@NgModule({
	imports: [CommonModule],
	declarations: [InlineCaretDirective],
	exports: [InlineCaretDirective]
})
export class UiComponentsIconsModule {}
