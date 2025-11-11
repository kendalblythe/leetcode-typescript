// https://leetcode.com/problems/two-sum/

import { expect, test } from 'vitest';
import { twoSum as aiTwoSum } from './0001-two-sum.ai';
import { twoSum1 as myTwoSum1, twoSum2 as myTwoSum2 } from './0001-two-sum.my';

test.each([
  ['myTwoSum1', myTwoSum1],
  ['myTwoSum2', myTwoSum2],
  ['aiTwoSum', aiTwoSum],
])('Two Sum - %s', (_funcName, twoSum) => {
  // Test case 1: Basic case
  expect(twoSum([2, 7, 11, 15], 9).sort((a, b) => a - b)).toEqual([0, 1]);

  // Test case 2: Solution in the middle
  expect(twoSum([3, 2, 4], 6).sort((a, b) => a - b)).toEqual([1, 2]);

  // Test case 3: Duplicate numbers
  expect(twoSum([3, 3], 6).sort((a, b) => a - b)).toEqual([0, 1]);

  // Test case 4: Negative numbers and larger target
  expect(twoSum([4, -3, 11, 9, 2, 15, 0], 12).sort((a, b) => a - b)).toEqual([1, 5]);

  // Test case 5: Solution at the beginning/end
  expect(twoSum([10, 1, 5, 4], 14).sort((a, b) => a - b)).toEqual([0, 3]);
});
