// https://leetcode.com/problems/two-sum/

/**
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 *
 * @param {number[]} nums The array of integers.
 * @param {number} target The target sum.
 * @returns {number[]} An array containing the indices of the two numbers.
 */
export function twoSum(nums: number[], target: number): number[] {
  // Map to store each number and its index as we iterate through the array
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement: the number we need to find to reach the target
    const complement = target - nums[i];

    // Check if the complement already exists in the map
    const index = map.get(complement);
    if (index !== undefined) {
      // Found the pair! Return the index of the complement and current index
      return [index, i];
    }

    // Store the current number and its index for future lookups
    map.set(nums[i], i);
  }

  // No valid pair found
  return [];
}
