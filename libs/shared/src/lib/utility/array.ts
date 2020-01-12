import { comparator, sort, propOr, pipe, map, assoc } from 'ramda';

export interface SortOrder {
  order: number;
}

export type Sortable<T extends SortOrder> = T;
export type SortFn = <T>(items: T) => T;

const byOrder = comparator<Sortable<any>>((a, b) => a.order < b.order);

/**
 * Sort an Array of objects by it's order property
 */
export const sortByOrder = sort(byOrder) as SortFn;

const getChildren = propOr([], 'children');
const sortChildren = pipe(
  getChildren,
  sortByOrder
);
const setChild = map(i => assoc('children', sortChildren(i), i));

/**
 * Sort an Array of Objects and it's direct children by their order property
 */
export const sortNestedByOrder = pipe(
  setChild,
  sortByOrder
) as SortFn;
