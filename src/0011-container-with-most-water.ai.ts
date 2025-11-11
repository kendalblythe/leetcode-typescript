// https://leetcode.com/problems/container-with-most-water/

/**
 * Finds the maximum area of water that can be contained between two lines.
 * Uses the Two Pointers approach for O(n) time complexity.
 *
 * @param {number[]} height An array of non-negative integers representing the height of the vertical lines.
 * @returns {number} The maximum area of water that can be contained.
 */
export const maxArea = (height: number[]): number => {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  // Use two pointers starting from the ends, moving inwards.
  while (left < right) {
    // The height of the container is limited by the shorter line.
    const h = Math.min(height[left], height[right]);
    // The width is the distance between the pointers.
    const w = right - left;
    const currentArea = h * w;

    // Update the maximum area found so far.
    maxArea = Math.max(maxArea, currentArea);

    // Optimization: To potentially find a larger area, we must move the pointer
    // corresponding to the shorter line inward. Moving the taller line guarantees
    // a smaller or equal height (limited by the shorter line) and a smaller width,
    // thus guaranteeing a smaller area.
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
