// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
import { expect, test } from 'vitest';

test('3. Longest Substring Without Repeating Characters', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
  expect(lengthOfLongestSubstring('developer')).toEqual(5);
});

const lengthOfLongestSubstring = (str: string): number => {
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
