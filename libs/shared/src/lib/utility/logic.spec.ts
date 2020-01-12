import { isUseable, isTrue, isFalse } from './logic';

describe('Utilities Library', () => {
  describe('logic functions', () => {
    describe('isUseable', () => {
      it('should be false for nulls', () => {
        expect(isUseable(null)).toBeFalsy();
      });
      it('should be false for undefined', () => {
        expect(isUseable(undefined)).toBeFalsy();
      });
      it('should be false for empty strings', () => {
        expect(isUseable('')).toBeFalsy();
      });
      it('should be true for a false value', () => {
        expect(isUseable(true)).toBeTruthy();
      });
    });
  });
});
