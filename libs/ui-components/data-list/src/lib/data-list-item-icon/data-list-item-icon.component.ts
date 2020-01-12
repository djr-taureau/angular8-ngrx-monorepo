// tslint:disable:use-host-property-decorator use-input-property-decorator
import { Component, OnInit, Input, HostBinding } from '@angular/core';

export const iconMap = {
  'sales-opportunity': 'dollar',
  'compliance-approval': 'check',
  todo: 'list',
  task: 'check',
  'compliance-revision-needed': 'x',
  'client-flagged-content': 'flag',
  suggestion: 'exclamation',
  'review-meeting': 'cal',
  'prep-for-review-meeting': 'list'
};

@Component({
  selector: 'dw-data-list-item-icon',
  templateUrl: './data-list-item-icon.component.html',
  styleUrls: ['./data-list-item-icon.component.scss'],
  host: { class: 'dw-data-list-item-icon' }
})
export class DataListItemIconComponent implements OnInit {
  @Input() icon: string;
  iconSelector: string;

  constructor() {}

  @HostBinding('class') classes = '';

  buildClassNames = type => `dw-data-list-item-icon-${type}`;

  ngOnInit() {
    this.classes = this.buildClassNames(this.icon);
    this.iconSelector = iconMap[this.icon];
  }
}
