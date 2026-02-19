// https://leetcode.com/problems/string-to-integer-atoi/

import { expect, test } from 'vitest';
import { myAtoi as aiAtoi } from './0008-string-to-integer-atoi.ai';
import { myAtoi } from './0008-string-to-integer-atoi.my';

const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);

test.each([
  ['myAtoi', myAtoi],
  ['aiAtoi', aiAtoi],
])('String to integer atoi - %s', (_funcName, myAtoi) => {
  // Test case 1: Basic conversion
  expect(myAtoi('42')).toBe(42);

  // Test case 2: Leading whitespace and sign
  expect(myAtoi('   -42')).toBe(-42);

  // Test case 3: Digits followed by non-digits
  expect(myAtoi('4193 with words')).toBe(4193);

  // Test case 4: Leading non-digits
  expect(myAtoi('words and 987')).toBe(0);

  // Test case 5: Only whitespace
  expect(myAtoi('   ')).toBe(0);

  // Test case 6: Only sign
  expect(myAtoi('+')).toBe(0);
  expect(myAtoi('-')).toBe(0);

  // Test case 7: Positive overflow (2^31)
  expect(myAtoi('2147483648')).toBe(INT_MAX);

  // Test case 8: Negative overflow (-(2^31 + 1))
  expect(myAtoi('-2147483649')).toBe(INT_MIN);

  // Test case 9: Max value boundary
  expect(myAtoi('2147483647')).toBe(INT_MAX);

  // Test case 10: Min value boundary
  expect(myAtoi('-2147483648')).toBe(INT_MIN);

  // Test case 11: Leading zeros
  expect(myAtoi('00000-42a1234')).toBe(0);

  // Test case 12: Multiple spaces before number
  expect(myAtoi('     123')).toBe(123);

  // Test case 13: Zero with leading whitespace
  expect(myAtoi('  0')).toBe(0);

  // Test case 14: Leading zeros with number
  expect(myAtoi('  00000123')).toBe(123);

  // Test case 15: Plus sign with number
  expect(myAtoi('+123')).toBe(123);

  // Test case 16: Multiple signs (invalid)
  expect(myAtoi('+-123')).toBe(0);
  expect(myAtoi('-+123')).toBe(0);

  // Test case 17: Very large number with leading zeros
  expect(myAtoi('00000000002147483647')).toBe(INT_MAX);
});
