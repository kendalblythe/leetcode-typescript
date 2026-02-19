// https://leetcode.com/problems/container-with-most-water/

/**
 * Finds the maximum area of water that can be contained between two lines.
 * Uses the Two Pointers approach for O(n) time complexity.
 *
 * @param {number[]} height An array of non-negative integers representing the height of the vertical lines.
 * @returns {number} The maximum area of water that can be contained.
 */
export const maxArea = (height: number[]): number => {
  // Handle edge case: if array has fewer than 2 elements, no container can be formed
  if (height.length < 2) {
    return 0;
  }

  // Initialize pointers at the start and end of the array
  let left = 0;
  let right = height.length - 1;

  // Track the maximum area found so far
  let maxAreaFound = 0;

  // Use two-pointer approach: start from both ends and move inward
  while (left < right) {
    // Calculate the width (distance between the two pointers)
    const width = right - left;

    // Calculate the height of the container (limited by the shorter line)
    const currentHeight = Math.min(height[left], height[right]);

    // Calculate the area of the current container
    const currentArea = width * currentHeight;

    // Update maxAreaFound if the current area is greater
    maxAreaFound = Math.max(maxAreaFound, currentArea);

    // Move the pointer pointing to the shorter line inward
    // This is the key insight: moving the taller line can only decrease or keep the area same,
    // but moving the shorter line might find a taller line that increases the area
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxAreaFound;
};
