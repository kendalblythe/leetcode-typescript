// https://leetcode.com/problems/two-sum/description/
import { expect, test } from 'vitest';

test('1. Two Sum 0(n)', () => {
  expect(twoSum1([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum1([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum1([3, 3], 6)).toEqual([0, 1]);
  expect(twoSum1([4, -3, 11, 9, 2, 15, 0], 12)).toEqual([1, 5]);
  expect(twoSum1([1, 2, 3, 4, 5], 20)).toBeNull();
});

test('1. Two Sum 0(n2)', () => {
  expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum2([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum2([3, 3], 6)).toEqual([0, 1]);
  expect(twoSum2([4, -3, 11, 9, 2, 15, 0], 12)).toEqual([1, 5]);
  expect(twoSum2([1, 2, 3, 4, 5], 20)).toBeNull();
});

const twoSum1 = (nums: number[], target: number): number[] | null => {
  const diffIndexMap: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const index = diffIndexMap[n];
    if (index !== undefined) {
      return [index, i];
    }
    const diff = target - n;
    diffIndexMap[diff] = i;
  }
  return null;
};

const twoSum2 = (nums: number[], target: number): number[] | null => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};
