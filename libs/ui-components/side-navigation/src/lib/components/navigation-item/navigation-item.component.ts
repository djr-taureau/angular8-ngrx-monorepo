//tslint:disable:use-input-property-decorator use-host-property-decorator
import {
	Component,
	ViewEncapsulation,
	ElementRef,
	EventEmitter,
	Output,
	Input
} from '@angular/core';
import {
	ComponentHostBase,
	mixinNavigation,
	HasNavigation
} from '@ngprojects/ui-components/core';
import { getRenderer } from '@angular/core/src/render3/instructions';

export const _NavigationItemBase = mixinNavigation(ComponentHostBase);

@Component({
	selector: 'dw-navigation-item',
	inputs: ['location', 'wrapWithAnchor', 'action'],
	templateUrl: './navigation-item.component.html',
	styleUrls: ['./navigation-item.component.scss'],
	host: { class: 'dw-navigation-item' },
	encapsulation: ViewEncapsulation.None
})
export class NavigationItemComponent extends _NavigationItemBase
	implements HasNavigation {
  @Output() event: EventEmitter<string> = new EventEmitter<string>();
  @Input() icon: string;


	constructor(public _elementRef: ElementRef) {
    super(_elementRef);
  }

	raiseEvent() {
    this.event.emit(null);
    console.log(event);
  }

}

