// https://leetcode.com/problems/two-sum/

/**
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 *
 * @param {number[]} nums The array of integers.
 * @param {number} target The target sum.
 * @returns {number[]} An array containing the indices of the two numbers.
 */
export function twoSum(nums: number[], target: number): number[] {
  // Use a Map to store numbers encountered so far and their indices for O(1) lookups.
  // Key: number, Value: index
  const numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // Calculate the required complement to reach the target.
    const complement = target - nums[i];

    // Check if the complement exists in the map. If it does, we found the pair.
    if (numMap.has(complement)) {
      // Return the index of the complement (stored in the map) and the current index i.
      // biome-ignore lint/style/noNonNullAssertion: if statement above checks for existence
      return [numMap.get(complement)!, i];
    }

    // If the complement is not found, store the current number and its index for future checks.
    numMap.set(nums[i], i);
  }

  // As per problem constraints, exactly one solution exists, so this line should not be reached.
  return [];
}
