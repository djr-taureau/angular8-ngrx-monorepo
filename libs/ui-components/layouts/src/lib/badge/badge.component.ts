//tslint:disable:directive-class-suffix: use-host-property-decorator
import { Component, Input, HostBinding} from '@angular/core';

@Component({
  selector: 'dw-badge, [dwBadge]',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  host: { class: 'dw-badge' },
})
export class BadgeComponent{
  @Input()
  @HostBinding('class.with-dot')
  useDot = false
}
