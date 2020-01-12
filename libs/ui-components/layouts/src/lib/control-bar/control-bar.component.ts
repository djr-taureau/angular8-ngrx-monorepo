//tslint:disable:directive-class-suffix: use-host-property-decorator
import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dw-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'dw-control-bar' },
})
export class ControlBarComponent{}


@Directive({
  selector: 'dw-control-bar-control, [dwControlBarControl]',
  host: { class: 'dw-control-bar-control' },
})
export class ControlBarControlDirective {}
