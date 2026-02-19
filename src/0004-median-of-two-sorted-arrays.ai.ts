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
  // Ensure nums1 is the smaller array for optimization
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  // Initialize binary search bounds on the smaller array
  let low = 0;
  let high = nums1.length;

  // Binary search to find the correct partition
  while (low <= high) {
    // Partition point in nums1 (how many elements from nums1 go to the left side)
    const partition1 = Math.floor((low + high) / 2);

    // Calculate partition point in nums2 such that left side has equal elements as right side
    // Total elements on left = partition1 + partition2
    // We want: partition1 + partition2 = (nums1.length + nums2.length + 1) / 2
    const partition2 = Math.floor((nums1.length + nums2.length + 1) / 2) - partition1;

    // Handle edge cases when partition is at boundaries
    // Use -Infinity when partition is 0 (no elements from that array on left side)
    // Use +Infinity when partition equals array length (all elements on left side)
    const left1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const right1 = partition1 === nums1.length ? Infinity : nums1[partition1];

    const left2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const right2 = partition2 === nums2.length ? Infinity : nums2[partition2];

    // Check if partition is valid (all elements on left <= all elements on right)
    if (left1 <= right2 && left2 <= right1) {
      // Valid partition found
      // If total length is even, median is average of max(left) and min(right)
      // If total length is odd, median is max(left)
      const totalLength = nums1.length + nums2.length;
      return totalLength % 2 === 0
        ? (Math.max(left1, left2) + Math.min(right1, right2)) / 2
        : Math.max(left1, left2);
    } else if (left1 > right2) {
      // partition1 is too large, move it left
      high = partition1 - 1;
    } else {
      // partition1 is too small, move it right
      low = partition1 + 1;
    }
  }

  // Should never reach here with valid input
  return -1;
}
