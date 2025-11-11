// https://leetcode.com/problems/longest-palindromic-substring/

import { expect, test } from 'vitest';
import { longestPalindrome as aiLongestPalindrome } from './0005-longest-palindromic-substring.ai';
import { longestPalindrome as myLongestPalindrome } from './0005-longest-palindromic-substring.my';

test.each([
  ['myLongestPalindrome', myLongestPalindrome],
  ['aiLongestPalindrome', aiLongestPalindrome],
])('Longest Palindromic Substring - %s', (_funcName, longestPalindrome) => {
  // Test case 1: Odd length palindrome in the middle
  // 'bab' or 'aba'. The implementation should return 'bab' because it checks center i=1 first (odd) -> 'bab', then i=2 (odd) -> 'a', i=2 (even) -> 'ad' fails.
  expect(longestPalindrome('babad')).toMatch(/bab|aba/);

  // Test case 2: Even length palindrome
  expect(longestPalindrome('cbbd')).toBe('bb');

  // Test case 3: Single character
  expect(longestPalindrome('a')).toBe('a');

  // Test case 4: Empty string
  expect(longestPalindrome('')).toBe('');

  // Test case 5: Palindrome is the whole string
  expect(longestPalindrome('racecar')).toBe('racecar');

  // Test case 6: Palindrome at the start
  expect(longestPalindrome('abacabaXYZ')).toBe('abacaba');

  // Test case 7: Palindrome at the end
  expect(longestPalindrome('XYZabacaba')).toBe('abacaba');

  // Test case 8: Multiple palindromes of max length, ensure one is returned
  expect(longestPalindrome('forgeeksskeegfor')).toBe('geeksskeeg');

  // Test case 9: No multi-letter palindrome exists
  expect(longestPalindrome('abc')).toBe('a');
});
