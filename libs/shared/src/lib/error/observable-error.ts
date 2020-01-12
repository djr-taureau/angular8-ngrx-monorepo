import { Observable, throwError } from 'rxjs';
//todo: Convert to RXJS Operator

export const throwErrorAndLog = name => tr => err => {
	console.error(name, err);
	return throwError(tr(err));
};
