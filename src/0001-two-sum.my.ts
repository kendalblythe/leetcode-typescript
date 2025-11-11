// https://leetcode.com/problems/two-sum/

export const twoSum1 = (nums: number[], target: number): number[] => {
  const diffIndexMap: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const index = diffIndexMap[n];
    if (index !== undefined) {
      return [index, i];
    }
    const diff = target - n;
    diffIndexMap[diff] = i;
  }
  return [];
};

export const twoSum2 = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
