// https://leetcode.com/problems/median-of-two-sorted-arrays/description/
import { expect, test } from 'vitest';

test('4. Median of Two Sorted Arrays', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  expect(findMedianSortedArrays([2, 4, 5], [3, 4, 7])).toEqual(4);
  expect(findMedianSortedArrays([1, 3, 5], [2, 3])).toEqual(3);
});

const findMedianSortedArrays = (array1: number[], array2: number[]): number => {
  const mergedArrayLen = array1.length + array2.length;
  const medianIndex = Math.floor(mergedArrayLen / 2);
  const mergedSortedArray = mergeSortedArrays(array1, array2, medianIndex);
  return mergedArrayLen % 2 === 0
    ? (mergedSortedArray[medianIndex - 1] + mergedSortedArray[medianIndex]) / 2
    : mergedSortedArray[medianIndex];
};

const mergeSortedArrays = (
  array1: number[],
  array2: number[],
  maxIndex = array1.length + array2.length
): number[] => {
  const mergedArray: number[] = [];
  let i1 = 0;
  let i2 = 0;
  while (mergedArray.length <= maxIndex) {
    if (array1[i1] < array2[i2]) {
      mergedArray.push(array1[i1++]);
    } else {
      mergedArray.push(array2[i2++]);
    }
  }
  return mergedArray;
};
