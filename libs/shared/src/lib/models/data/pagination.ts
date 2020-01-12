import { map } from 'rxjs/operators';
import { omit } from 'ramda';

export interface IPaginationHeader {
	totalRecords: number;
	totalReturned: number;
	originalRequest: { offset: number; limit: number };
}

export interface PaginationResult<T> extends IPaginationHeader {
	results: Array<T>;
}

export interface PaginationResultAction<A, R> {
	new (payload: R[], paging: IPaginationHeader): A;
}

// export function createPaginationSuccessAction<A, R>(
// 	ResultsAction: PaginationResultAction<A, R>
// ) {
// 	return map(
// 		(results: PaginationResult<R>) =>
// 			new ResultsAction(results.results, omit(['results'], results))
// 	);
// }
