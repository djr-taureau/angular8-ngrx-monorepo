import {
	Component,
	OnInit,
	Input,
	ElementRef,
	ViewEncapsulation
} from '@angular/core';
import { CanDisable, mixinDisabled } from '@angular/material/core';
import { NavigationLink } from '@lifeworks/common';

export class MatTabLabelWrapperBase {}
export const _MatTabLabelWrapperMixinBase = mixinDisabled(
	MatTabLabelWrapperBase
);

@Component({
	selector: 'lw-status-list-item',
	// tslint:disable-next-line:use-input-property-decorator
	inputs: ['disabled'],
	templateUrl: './status-list-item.component.html',
	styleUrls: ['./status-list-item.component.scss'],
	// tslint:disable-next-line:use-host-property-decorator
	host: { class: 'lw-status-list-item' }
})
export class StatusListItemComponent extends _MatTabLabelWrapperMixinBase
	implements CanDisable, OnInit {
	@Input() tabindex = 0;
	@Input() location: NavigationLink;

	constructor(public elementRef: ElementRef) {
		super();
	}

	ngOnInit() {}

	/** Sets focus on the wrapper element */
	focus(): void {
		this.elementRef.nativeElement.firstChild.focus();
	}

	//todo: Update this placeholder
	selectItem(): void {
		return;
	}

	getOffsetLeft(): number {
		return this.elementRef.nativeElement.offsetLeft;
	}

	getOffsetWidth(): number {
		return this.elementRef.nativeElement.offsetWidth;
	}
}
