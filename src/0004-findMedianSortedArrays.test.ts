test("4. Median of Two Sorted Arrays", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  expect(findMedianSortedArrays([2, 4, 5], [3, 4, 7])).toEqual(4);
  expect(findMedianSortedArrays([1, 3, 5], [2, 3])).toEqual(3);
});

const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const mergedArray = [...nums1, ...nums2];
  mergedArray.sort((a, b) => a - b);
  const quotient = Math.floor(mergedArray.length / 2);
  const remainder = mergedArray.length % 2;
  return remainder === 0
    ? (mergedArray[quotient - 1] + mergedArray[quotient]) / 2
    : mergedArray[quotient];
};
