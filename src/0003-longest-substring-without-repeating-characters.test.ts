// https://leetcode.com/problems/longest-substring-without-repeating-characters/

import { expect, test } from 'vitest';
import { lengthOfLongestSubstring as aiLengthOfLongestSubstring } from './0003-longest-substring-without-repeating-characters.ai';
import { lengthOfLongestSubstring as myLengthOfLongestSubstring } from './0003-longest-substring-without-repeating-characters.my';

test.each([
  ['myLengthOfLongestSubstring', myLengthOfLongestSubstring],
  ['aiLengthOfLongestSubstring', aiLengthOfLongestSubstring],
])('Longest Substring Without Repeating Characters - %s', (_funcName, lengthOfLongestSubstring) => {
  // Test case 1: Standard case
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);

  // Test case 2: All repeating characters
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1);

  // Test case 3: Substring in the middle/end
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3); // "wke" or "kew"

  // Test case 4: Longer string with internal repeats
  expect(lengthOfLongestSubstring('developer')).toBe(5); // "velop"

  // Test case 5: Empty string
  expect(lengthOfLongestSubstring('')).toBe(0);

  // Test case 6: String with all unique characters
  expect(lengthOfLongestSubstring('abcdefg')).toBe(7);

  // Test case 7: String with leading/trailing repeats
  expect(lengthOfLongestSubstring('aab')).toBe(2); // "ab"
  expect(lengthOfLongestSubstring('dvdf')).toBe(3); // "vdf"
});
