test("4. Median of Two Sorted Arrays", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  expect(findMedianSortedArrays([2, 4, 5], [3, 4, 7])).toEqual(4);
  expect(findMedianSortedArrays([1, 3, 5], [2, 3])).toEqual(3);
});

const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const mergedArrayLen = nums1.length + nums2.length;
  const medianIndex = Math.floor(mergedArrayLen / 2);
  const multipleMedianIndices = mergedArrayLen % 2 === 0;

  // Get sorted merged array up to median index
  const sortedMergedArray: number[] = [];
  for (let i = 0; i <= medianIndex; i++) {
    const num1 = nums1[0];
    const num2 = nums2[0];
    if (num1 < num2) {
      sortedMergedArray.push(num1);
      nums1.shift();
    } else {
      sortedMergedArray.push(num2);
      nums2.shift();
    }
  }

  // Return median value
  return multipleMedianIndices
    ? (sortedMergedArray[medianIndex - 1] + sortedMergedArray[medianIndex]) / 2
    : sortedMergedArray[medianIndex];
};
