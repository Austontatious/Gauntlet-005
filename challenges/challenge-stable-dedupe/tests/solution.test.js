import test from 'node:test';
import assert from 'node:assert/strict';
import { solve } from '../solution.js';

test('dedupes while preserving order', () => {
  const input = ['a', 'b', 'a', 'c', 'b', 'd'];
  const expected = ['a', 'b', 'c', 'd'];
  assert.deepEqual(solve(input), expected);
});

test('handles all unique and all duplicate cases', () => {
  assert.deepEqual(solve(['x', 'y', 'z']), ['x', 'y', 'z']);
  assert.deepEqual(solve(['same', 'same', 'same']), ['same']);
});
