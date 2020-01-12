//tslint:disable: use-host-property-decorator directive-selector
import {
	Component,
	OnInit,
	AfterViewInit,
	Input,
	ViewEncapsulation,
	Output,
	QueryList,
	EventEmitter,
	HostListener,
	ChangeDetectionStrategy,
	ViewChildren
} from '@angular/core';
import { StatusListItems } from '../models';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { END, ENTER, HOME, SPACE } from '@angular/cdk/keycodes';
import { StatusListItemComponent } from '../status-list-item/status-list-item.component';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { clone } from 'ramda';

@Component({
	selector: 'dw-status-list',
	templateUrl: './status-list.component.html',
	styleUrls: ['./status-list.component.scss'],
	host: { class: 'dw-status-list' },
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class StatusListComponent implements OnInit, AfterViewInit {
	@ViewChildren(StatusListItemComponent)
	_statusListItems: QueryList<StatusListItemComponent>;
	@Input() data: StatusListItems;
	_data: StatusListItems;

	/** Event emitted when the option is selected. */
	@Output() readonly selectFocusedIndex = new EventEmitter();

	/** Event emitted when a label is focused. */
	@Output() readonly indexFocused = new EventEmitter();

	/** Used to manage focus between the tabs. */
	private _keyManager: FocusKeyManager<StatusListItemComponent>;

	private _selectedIndex = 0;

	constructor() {}

	ngOnInit() {
		this._data = clone(this.data);
	}

	ngAfterViewInit() {
		this._keyManager = new FocusKeyManager(
			this._statusListItems
		).withWrap();

		this._keyManager.updateActiveItem(0);

		this._keyManager.change.subscribe(newFocusIndex => {
			this.indexFocused.emit(newFocusIndex);
			this._setTabFocus(newFocusIndex);
		});
	}

	@HostListener('keyup', ['$event'])
	_handleKeydown(event: KeyboardEvent) {
		switch (event.keyCode) {
			case HOME:
				this._keyManager.setFirstItemActive();
				event.preventDefault();
				break;
			case END:
				this._keyManager.setLastItemActive();
				event.preventDefault();
				break;
			case ENTER:
			case SPACE:
				this.selectFocusedIndex.emit(this.focusIndex);
				event.preventDefault();
				break;
			default:
				this._keyManager.onKeydown(event);
		}
	}

	/** Tracks which element has focus; used for keyboard navigation */
	get focusIndex(): number {
		// tslint:disable-next-line:no-non-null-assertion
		return this._keyManager ? this._keyManager.activeItemIndex! : 0;
	}

	/** When the focus index is set, we must manually send focus to the correct label */
	set focusIndex(value: number) {
		if (
			!this._isValidIndex(value) ||
			this.focusIndex === value ||
			!this._keyManager
		) {
			return;
		}

		this._keyManager.setActiveItem(value);
	}

	/**
	 * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
	 * providing a valid index and return true.
	 */
	_isValidIndex(index: number): boolean {
		if (!this._statusListItems) {
			return true;
		}

		const tab = this._statusListItems
			? this._statusListItems.toArray()[index]
			: null;
		return !!tab && !tab.disabled;
	}

	/**
	 * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
	 * scrolling is enabled.
	 */
	_setTabFocus(tabIndex: number) {
		if (this._statusListItems && this._statusListItems.length) {
			this._statusListItems.toArray()[tabIndex].focus();
		}
	}

	/** The index of the active tab. */
	@Input()
	get selectedIndex(): number {
		return this._selectedIndex;
	}
	set selectedIndex(value: number) {
		value = coerceNumberProperty(value);
		this._selectedIndex = value;

		if (this._keyManager) {
			this._keyManager.updateActiveItemIndex(value);
		}
	}

	clickToggleExpand(event, target): boolean {
		event.stopPropagation();
		target.collapsed = !target.collapsed;
		return false;
	}
}
