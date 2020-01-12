import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from '@ngprojects/shared';
import { slice } from 'ramda';
import { isNotUseable } from '../utility/logic';

@Pipe({
	name: 'phone'
})
export class PhonePipe implements PipeTransform {
	transform(phone: Phone, singleLine: boolean = false): any {
		if (isNotUseable(phone)) {
			return '';
		}

		switch (phone.dialingCode) {
			case '1':
			default:
				return `(${slice(0, 3, phone.number)}) ${slice(3, 6, phone.number)}-${slice(6, Infinity, phone.number)}`;
		}
	}
}
