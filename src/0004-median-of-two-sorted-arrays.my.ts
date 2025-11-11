// https://leetcode.com/problems/median-of-two-sorted-arrays/

export const findMedianSortedArrays = (array1: number[], array2: number[]): number => {
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
    if (array1[i1] === undefined) {
      mergedArray.push(array2[i2++]);
    } else if (array2[i2] === undefined) {
      mergedArray.push(array1[i1++]);
    } else if (array1[i1] < array2[i2]) {
      mergedArray.push(array1[i1++]);
    } else {
      mergedArray.push(array2[i2++]);
    }
  }
  return mergedArray;
};
