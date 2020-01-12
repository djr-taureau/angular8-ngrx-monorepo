import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
	transform(str: string, substr: string, newSubstr): string {
		const re = new RegExp(substr, 'g');
		return str.replace(re, newSubstr);
	}
}
