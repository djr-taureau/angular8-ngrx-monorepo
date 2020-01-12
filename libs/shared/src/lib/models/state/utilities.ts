import { Observable, combineLatest } from 'rxjs';
import { map as rxMap } from 'rxjs/operators'
import { assoc, assocPath, pipe, values } from 'ramda';
import { LoadDataStatus, DataState } from './entity-state';
import { indexByProp } from '../../utility/object';

/**
 * Helper method to set the status in State;
 */
const updateDataStatus = (status: string) => assoc('status', status);

/**
 * Sets the status in State to "loading"
 */
export const setLoadingState = updateDataStatus(LoadDataStatus.loading);

/**
 * Sets the status in State to "loaded"
 */
export const setLoadedState = updateDataStatus(LoadDataStatus.loaded);

/**
 * Updates all Entities in State
 */
export const setEntities = <T, S>(entities: Array<T>, state: S) =>
	assoc('entities', indexByProp('guid', entities), state) as S;


/**
 * Updates a property of an Entity in state
 */
export const setEntityProp = (...props: string[]) => <V, S>(
	id: string,
	value: V,
	state: S
) => assocPath<V, S>(['entities', id, ...props], value, state) as S;

/**
 * Updates an Entity in state
 */
export const setEntity = <V, S>(id: string, value: V, state: S) =>
	assocPath<V, S>(['entities', id], value, state) as S;

/**
 * function signature for `setDataState`
 */
type SetDataStateFn = <P, T>(payload: Array<P>, state: T) => T;

/**
 * Updates Entities in state and set the status to loaded
 */
export const setDataState = <SetDataStateFn>pipe(setEntities, setLoadedState);

/**
 * Calculates the State of the requested dataset from state
 */
const calculateDataState = ([loaded, count]: [boolean, number]): DataState => {
	if (!loaded) {
		return LoadDataStatus.loading;
	} else if (loaded && count > 0) {
		return LoadDataStatus.loaded;
	} else if (loaded && count < 1) {
		return LoadDataStatus.empty;
	}
	return LoadDataStatus.error;
};

/**
 * Calculates the State of the requested dataset from the count and loadStatus
 */
export const getDatasetState = (loaded$: Observable<boolean>, count$: Observable<number>) => {
	return combineLatest(
		loaded$,
		count$
	).pipe(rxMap(calculateDataState));
}
