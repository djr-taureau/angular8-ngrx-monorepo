//tslint:disable:no-input-rename
import {
	Directive,
	Input,
	ElementRef,
	AfterContentInit,
	Renderer2
} from '@angular/core';

export type CaretPosition = 'top' | 'center' | 'bottom';
export type CaretLocation = 'start' | 'end';
export type CaretDirection = 'up' | 'down' | 'left' | 'right';
export type CaretColor = 'white' | 'orange' | 'green' | 'blue';
export type CaretSize = 'small' | 'large';

@Directive({
	selector: '[dwInlineCaret]'
})
export class InlineCaretDirective implements AfterContentInit {
	@Input('dwInlineFontIcon') icon = '';
	@Input() caretPosition: CaretPosition = 'center';
	@Input() caretLocation: CaretLocation = 'end';
	@Input() caretDirection: CaretDirection = 'right';
	@Input() caretColor: CaretColor = 'orange';
	@Input() caretSize: CaretSize = 'small';

	constructor(
		private _elementRef: ElementRef,
		private _renderer: Renderer2
	) {}

	createCaret(
		direction: CaretDirection,
		color: CaretColor,
		position: CaretPosition,
		size: CaretSize
	) {
		const spanEle: HTMLElement = this._renderer.createElement('span');
		const icon = this._renderer.setValue(spanEle, '&gt;');
		this._renderer.addClass(spanEle, `icon-${direction}`);
		this._renderer.addClass(spanEle, `inline-caret`);
		this._renderer.addClass(spanEle, `inline-caret-${position}`);
		this._renderer.addClass(spanEle, `inline-caret-${size}`);
		this._renderer.addClass(spanEle, `caret-color-${color}`);

		return spanEle;
	}

	getHostElement(): HTMLElement {
		return this._elementRef.nativeElement;
	}

	insertCaret(
		direction: CaretDirection,
		location: CaretLocation,
		color: CaretColor,
		position: CaretPosition,
		size: CaretSize
	) {
		const caret = this.createCaret(direction, color, position, size);
		if (location === 'start') {
			this._renderer.insertBefore(
				this.getHostElement(),
				caret,
				this.getHostElement().firstChild
			);
		} else {
			this._renderer.appendChild(this.getHostElement(), caret);
		}
	}

	ngAfterContentInit() {
		this.insertCaret(
			this.caretDirection,
			this.caretLocation,
			this.caretColor,
			this.caretPosition,
			this.caretSize
		);
	}
}
