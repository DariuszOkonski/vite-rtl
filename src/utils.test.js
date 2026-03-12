import { describe, expect, it } from 'vitest';
import { range } from './utils';

describe('utils', () => {
  describe('range', () => {
    it('returns correct result from 1-6 range', () => {
      const result = range(1, 6);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
