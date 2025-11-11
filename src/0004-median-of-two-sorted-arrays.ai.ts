// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * Finds the median of two sorted arrays `nums1` and `nums2`.
 * The overall run time complexity should be O(log(min(m, n))).
 *
 * @param {number[]} nums1 The first sorted array.
 * @param {number[]} nums2 The second sorted array.
 * @returns {number} The median of the two sorted arrays.
 */
export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Ensure nums1 is the smaller array to guarantee O(log(min(m, n))) complexity for binary search.
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  const totalLength = m + n;
  // halfLen is the size of the left partition (or left + middle element for odd total length).
  const halfLen = Math.floor((totalLength + 1) / 2);

  let low = 0;
  let high = m; // Binary search space is on the smaller array (nums1) length.

  while (low <= high) {
    // partitionX is the number of elements taken from nums1 for the left partition.
    const partitionX = Math.floor((low + high) / 2);
    // partitionY is determined by partitionX to ensure the left partition size is halfLen.
    const partitionY = halfLen - partitionX;

    // Determine boundary elements for partitionX in nums1
    // maxX: largest element in the left part of nums1. Use -Infinity if partitionX is 0.
    const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    // minX: smallest element in the right part of nums1. Use Infinity if partitionX is m.
    const minX = partitionX === m ? Infinity : nums1[partitionX];

    // Determine boundary elements for partitionY in nums2
    // maxY: largest element in the left part of nums2. Use -Infinity if partitionY is 0.
    const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    // minY: smallest element in the right part of nums2. Use Infinity if partitionY is n.
    const minY = partitionY === n ? Infinity : nums2[partitionY];

    // Check if the partition is correct: max of left side <= min of right side.
    if (maxX <= minY && maxY <= minX) {
      // Correct partition found. Calculate median.
      if (totalLength % 2 === 0) {
        // Even total length: median is average of max(left_part) and min(right_part)
        const leftMax = Math.max(maxX, maxY);
        const rightMin = Math.min(minX, minY);
        return (leftMax + rightMin) / 2;
      } else {
        // Odd total length: median is the largest element in the left partition.
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      // maxX is too large, meaning partitionX is too far right. Move left in nums1.
      high = partitionX - 1;
    } else {
      // maxY > minX
      // maxY is too large (or minX is too small), meaning partitionX is too far left. Move right in nums1.
      low = partitionX + 1;
    }
  }

  // Should only be reached if input constraints (sorted arrays) are violated.
  throw new Error('Input arrays are not sorted or logic error.');
}
