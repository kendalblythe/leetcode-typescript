// https://leetcode.com/problems/palindrome-number/description/
import { expect, test } from 'vitest';

test('9. Palindrome Number (with string conversion) ', () => {
  expect(isPalindrome1(121)).toBeTruthy();
  expect(isPalindrome1(-121)).toBeFalsy();
  expect(isPalindrome1(10)).toBeFalsy();
  expect(isPalindrome2(12345)).toBeFalsy();
  expect(isPalindrome1(123454321)).toBeTruthy();
  expect(isPalindrome1(0)).toBeTruthy();
  expect(isPalindrome1(5)).toBeTruthy();
});

test('9. Palindrome Number (without string conversion) ', () => {
  expect(isPalindrome2(121)).toBeTruthy();
  expect(isPalindrome2(-121)).toBeFalsy();
  expect(isPalindrome2(10)).toBeFalsy();
  expect(isPalindrome2(12345)).toBeFalsy();
  expect(isPalindrome2(123454321)).toBeTruthy();
  expect(isPalindrome2(0)).toBeTruthy();
  expect(isPalindrome2(5)).toBeTruthy();
});

const isPalindrome1 = (n: number): boolean => {
  const s1 = n.toString();
  const s2 = [...s1].reverse().join('');
  return s1 === s2;
};

const isPalindrome2 = (n: number): boolean => {
  if (n < 0) return false; // negative sign causes this to always be false
  if (n < 10) return true; // 1 digit always true
  const digitCount = getDigitCount(n);
  let startIndex = 0;
  let endIndex = digitCount - 1;
  while (startIndex < endIndex) {
    const n1 = getDigitPlaceValue(n, startIndex);
    const n2 = getDigitPlaceValue(n, endIndex);
    if (n1 !== n2) return false;
    startIndex++;
    endIndex--;
  }
  return true;
};

const getDigitCount = (n: number): number => {
  let count = 1;
  while (n >= Math.pow(10, count)) count++;
  return count;
};

const getDigitPlaceValue = (n: number, place: number): number => {
  const divisor = Math.pow(10, place);
  return Math.floor((n / divisor) % 10);
};
