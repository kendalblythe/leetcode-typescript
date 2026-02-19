// https://leetcode.com/problems/median-of-two-sorted-arrays/

import { expect, test } from 'vitest';
import { findMedianSortedArrays as aiFindMedianSortedArrays } from './0004-median-of-two-sorted-arrays.ai';
import { findMedianSortedArrays as myFindMedianSortedArrays } from './0004-median-of-two-sorted-arrays.my';

test.each([
  ['myFindMedianSortedArrays', myFindMedianSortedArrays],
  ['aiFindMedianSortedArrays', aiFindMedianSortedArrays],
])('Median of Two Sorted Arrays - %s', (_funcName, findMedianSortedArrays) => {
  // Test case 1: Odd total length
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);

  // Test case 2: Even total length
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);

  // Test case 3: Uneven lengths, even total
  expect(findMedianSortedArrays([1, 2, 5], [3, 4, 6])).toBe(3.5); // Merged: [1, 2, 3, 4, 5, 6]. Median = (3+4)/2 = 3.5

  // Test case 4: Uneven lengths, odd total
  expect(findMedianSortedArrays([1, 3, 5], [2, 4])).toBe(3.0); // Merged: [1, 2, 3, 4, 5]. Median = 3

  // Test case 5: One array empty
  expect(findMedianSortedArrays([], [1, 2, 3, 4, 5])).toBe(3.0);

  // Test case 6: Other array empty
  expect(findMedianSortedArrays([10, 20, 30], [])).toBe(20.0);

  // Test case 7: Arrays with negative numbers
  expect(findMedianSortedArrays([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10])).toBe(3.0); // Merged: [-12, -10, -6, -5, -3, 3, 4, 6, 10, 12, 15]. Length 11. Median is 6th element (index 5), which is 3.

  // Test case 8: Single element in each array
  expect(findMedianSortedArrays([1], [2])).toBe(1.5);

  // Test case 9: All elements in first array smaller than second
  expect(findMedianSortedArrays([1, 2], [3, 4, 5, 6])).toBe(3.5);

  // Test case 10: Very large arrays
  const largeArr1 = Array.from({ length: 100 }, (_, i) => i);
  const largeArr2 = Array.from({ length: 100 }, (_, i) => i + 100);
  expect(findMedianSortedArrays(largeArr1, largeArr2)).toBe(99.5);
});
