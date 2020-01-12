import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FillComponent } from './components';
import { BindTemplateDirective } from './directives';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FillComponent, BindTemplateDirective],
  exports: [FillComponent, BindTemplateDirective]
})
export class UiComponentsCoreModule {}
