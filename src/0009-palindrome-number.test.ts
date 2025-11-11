// https://leetcode.com/problems/palindrome-number/

import { expect, test } from 'vitest';
import { isPalindrome as aiIsPalindrome } from './0009-palindrome-number.ai';
import {
  isPalindrome1 as myIsPalindrome1,
  isPalindrome2 as myIsPalindrome2,
} from './0009-palindrome-number.my';

test.each([
  ['myIsPalindrome1', myIsPalindrome1],
  ['myIsPalindrome2', myIsPalindrome2],
  ['aiIsPalindrome', aiIsPalindrome],
])('Palindrome Number - %s', (_funcName, isPalindrome) => {
  // Test case 1: Positive palindrome
  expect(isPalindrome(121)).toBeTruthy();

  // Test case 2: Negative number (not a palindrome)
  expect(isPalindrome(-121)).toBeFalsy();

  // Test case 3: Number ending in 0 (not a palindrome, except 0 itself)
  expect(isPalindrome(10)).toBeFalsy();

  // Test case 4: Non-palindrome
  expect(isPalindrome(12345)).toBeFalsy();

  // Test case 5: Large palindrome
  expect(isPalindrome(123454321)).toBeTruthy();

  // Test case 6: Zero
  expect(isPalindrome(0)).toBeTruthy();

  // Test case 7: Single digit
  expect(isPalindrome(5)).toBeTruthy();

  // Test case 8: Even length palindrome
  expect(isPalindrome(1221)).toBeTruthy();

  // Test case 9: Number ending in 0, but is not 0
  expect(isPalindrome(100)).toBeFalsy();
});
