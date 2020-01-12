//tslint:disable:directive-class-suffix: use-host-property-decorator
import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dw-section-title, [dwSectionTitle]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./section-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'dw-section-title' },
})
export class SectionTitleComponent{ }


@Directive({
  selector: 'dw-section-subtitle, [dwSectionSubtitle]',
  host: { class: 'dw-section-subtitle' },
})
export class SectionSubtitleDirective {}
