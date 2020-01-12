//tslint:disable:directive-class-suffix: use-host-property-decorator
import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dw-section',
  template: '<ng-content></ng-content>',
  styleUrls: ['./section.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'dw-section' }
})
export class SectionComponent {}

@Directive({
  selector: 'dw-section-header, [dwSectionHeader]',
  host: { class: 'dw-section-header' }
})
export class SectionHeaderDirective {}

@Directive({
  selector: 'dw-section-footer, [dwSectionFooter]',
  host: { class: 'dw-section-footer' }
})
export class SectionFooterDirective {}

@Directive({
  selector: 'dw-section-content, [dwSectionContent]',
  host: { class: 'dw-section-content' }
})
export class SectionContentDirective {}
