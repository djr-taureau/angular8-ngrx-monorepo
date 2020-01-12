import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '@ngprojects/shared';
import { props, filter } from 'ramda';
import { isNotUseable, isUseable } from '../utility/logic';

export interface AddressPipeOptions {
	singleLine?: boolean;
}

@Pipe({
	name: 'address'
})
export class AddressPipe implements PipeTransform {
	transform(address: Address, singleLine: boolean = false): any {
		if (isNotUseable(address)) {
			return '';
		}

		const streets = filter(isUseable, props(['street1', 'street2', 'street3'], address));
		const remainder = filter(isUseable, props(
			['city', 'stateProvince', 'postalCode', 'country'],
			address
		));

		if (singleLine) {
			return [...streets, ...remainder].join(', ');
		}

		return `<p>${[...streets, ...remainder].join('<br>')}</p>`;
	}
}
