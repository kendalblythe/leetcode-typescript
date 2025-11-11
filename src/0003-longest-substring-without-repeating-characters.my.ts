// https://leetcode.com/problems/longest-substring-without-repeating-characters/

export const lengthOfLongestSubstring = (str: string): number => {
  if (!str) {
    return 0;
  }
  let longestOverall = 1;
  const chars = [...str];
  for (let i = 0; i < chars.length - 1; i++) {
    const charSet = new Set<string>();
    let longestStartingAtI = 0;
    for (let j = i; j < chars.length; j++) {
      if (charSet.has(chars[j])) break;
      charSet.add(chars[j]);
      longestStartingAtI++;
    }
    longestOverall = Math.max(longestOverall, longestStartingAtI);
  }
  return longestOverall;
};
