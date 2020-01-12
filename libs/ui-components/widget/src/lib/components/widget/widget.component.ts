//tslint:disable:use-host-property-decorator
import {
	Component,
	ViewEncapsulation,
	ChangeDetectionStrategy
} from '@angular/core';

@Component({
	selector: 'dw-widget',
	exportAs: 'dwWidget',
	templateUrl: './widget.component.html',
	styleUrls: ['./widget.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'dw-widget' }
})
export class WidgetComponent {}
