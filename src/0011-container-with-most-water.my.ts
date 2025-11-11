// https://leetcode.com/problems/container-with-most-water/

export const maxArea = (height: number[]): number => {
  if (height.length <= 1) return 0;
  let max = 0;
  for (let i1 = 0; i1 < height.length; i1++) {
    const h1 = height[i1];
    for (let i2 = i1 + 1; i2 < height.length; i2++) {
      const h2 = height[i2];
      const h = Math.min(h1, h2);
      const w = i2 - i1;
      const area = h * w;
      max = Math.max(max, area);
    }
  }
  return max;
};
