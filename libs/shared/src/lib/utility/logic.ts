import {
  isNil,
  isEmpty,
  either,
  complement,
  equals,
  test,
  when,
  prop,
  pipe
} from 'ramda';

type Predicate = (v: any) => boolean;
type TypedPredicate<T> = (v: T) => boolean;
type RegExPredicate = (s: RegExp) => TypedPredicate<string>;

/**
 * Returns true when the input does not match the supplied regex
 */
export const doesNotMatch: RegExPredicate = testRx => complement(test(testRx));

/**
 * Determines if input is not `null`, `""`, `{}`, `[]` or `undefined` value
 */
export const isNotUseable: Predicate = either(isNil, isEmpty);

/**
 * Determines if input is not a `null`, `""`, `{}`, `[]` or `undefined` value
 */
export const isUseable: Predicate = complement(isNotUseable);

/**
 * Determines if an object is `true`
 */
export const isTrue = equals(true);

/**
 * Determines if an object is `false`
 */
export const isFalse = equals(false);

/**
 * Determines if an object is not `""`, `{}` or `[]`
 */
export const notEmpty: Predicate = complement(isEmpty);

/**
 * Used to build whenFn Functions
 */
const buildWhenFn = <T>(pred: TypedPredicate<T>) => <U>(thenFn: (a: T) => U) =>
  when<T, U>(pred, thenFn);

/**
 * Transforms a value when the value is not a `""`, `{}` or `[]` value
 */
export const whenNotEmpty = buildWhenFn(notEmpty);

/**
 * Transforms a value when the value is not a `""`, `{}` or `[]` value
 */
export const whenNotUseable = buildWhenFn(isNotUseable);

/**
 * Transforms a property of an object if it is not a useable value
 */
export function whenPropIsNotUseable<T, U>(
  property: string,
  thenFn: (a: T) => U
) {
  return pipe<T, any, U>(
    prop(property),
    whenNotUseable(thenFn)
  );
}
