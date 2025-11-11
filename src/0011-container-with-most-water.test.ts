// https://leetcode.com/problems/container-with-most-water/

import { expect, test } from 'vitest';
import { maxArea as aiMaxArea } from './0011-container-with-most-water.ai';
import { maxArea as myMaxArea } from './0011-container-with-most-water.my';

test.each([
  ['myMaxArea', myMaxArea],
  ['aiMaxArea', aiMaxArea],
])('11. Container With Most Water - %s', (_funcName, maxArea) => {
  // Basic functionality
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(maxArea([1, 1])).toBe(1);
  expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  expect(maxArea([1, 2, 1])).toBe(2);

  // Edge cases
  expect(maxArea([])).toBe(0);
  expect(maxArea([5])).toBe(0);
  expect(maxArea([0, 0])).toBe(0);
  expect(maxArea([0, 5, 0])).toBe(0);
  expect(maxArea([0, 2, 0, 3, 0])).toBe(4);

  // Ascending heights
  expect(maxArea([1, 2, 3, 4, 5])).toBe(6);
  expect(maxArea([1, 3, 5, 7, 9])).toBe(10);

  // Descending heights
  expect(maxArea([5, 4, 3, 2, 1])).toBe(6);
  expect(maxArea([9, 7, 5, 3, 1])).toBe(10);

  // Equal heights
  expect(maxArea([3, 3, 3, 3, 3])).toBe(12);
  expect(maxArea([5, 5])).toBe(5);
  expect(maxArea([2, 2, 5, 5, 2, 2])).toBe(10);

  // V-shaped patterns
  expect(maxArea([5, 4, 3, 4, 5])).toBe(20);
  expect(maxArea([8, 6, 4, 2, 4, 6, 8])).toBe(48);

  // Inverted V-shaped patterns
  expect(maxArea([1, 2, 3, 2, 1])).toBe(4);
  expect(maxArea([2, 4, 6, 8, 6, 4, 2])).toBe(16);

  // Large values
  expect(maxArea([1000, 1000])).toBe(1000);
  expect(maxArea([1000, 1, 1, 1, 1, 1, 1000])).toBe(6000);
  const largeArray = new Array(100).fill(10000);
  expect(maxArea(largeArray)).toBe(990000);

  // Tall lines at edges
  expect(maxArea([10, 1, 1, 1, 10])).toBe(40);
  expect(maxArea([10, 1, 1, 1, 1])).toBe(4);
  expect(maxArea([1, 1, 1, 1, 10])).toBe(4);

  // Plateau patterns
  expect(maxArea([5, 5, 5, 1, 1])).toBe(10);
  expect(maxArea([1, 1, 5, 5, 5])).toBe(10);
  expect(maxArea([1, 5, 5, 5, 1])).toBe(10);

  // Alternating patterns
  expect(maxArea([5, 1, 5, 1, 5])).toBe(20);
  expect(maxArea([1, 5, 1, 5, 1])).toBe(10);
  expect(maxArea([1, 4, 2, 5, 3, 6])).toBe(16);

  // Real-world scenarios
  expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toBe(17);
  expect(maxArea([1, 2, 1, 2, 1, 2, 1, 2])).toBe(12);
  expect(maxArea([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10])).toBe(100);

  // Performance considerations
  const heights = Array.from({ length: 50 }, (_, i) => (i % 10) + 1);
  const result = maxArea(heights);
  expect(result).toBeGreaterThan(0);
  expect(typeof result).toBe('number');

  expect(maxArea([7, 1, 2, 3, 9, 3, 2, 1, 7])).toBe(56);

  // Special mathematical cases
  expect(maxArea([4, 1, 1, 1, 4])).toBe(16);
  expect(maxArea([3, 1, 5, 1, 3])).toBe(12);
  expect(maxArea([1, 1, 2, 3, 5, 8])).toBe(6);
});
