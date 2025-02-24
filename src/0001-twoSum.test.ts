import { expect, test } from "vitest";

test("1. Two Sum", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  expect(twoSum([4, -3, 11, 9, 2, 15, 0], 12)).toEqual([1, 5]);
  expect(twoSum([1, 2, 3, 4, 5], 20)).toBeNull();
});

const twoSum = (nums: number[], target: number): number[] | null => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};
