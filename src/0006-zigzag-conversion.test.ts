// https://leetcode.com/problems/zigzag-conversion/

import { expect, test } from 'vitest';
import { convert as aiConvert } from './0006-zigzag-conversion.ai';
import { convert as myConvert } from './0006-zigzag-conversion.my';

test.each([
  ['myConvert', myConvert],
  ['aiConvert', aiConvert],
])('Zigzag Conversion - %s', (_funcName, convert) => {
  // Test case 1: Example 1 (numRows = 3)
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');

  // Test case 2: Example 2 (numRows = 4)
  expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');

  // Test case 3: Single row (should return original string)
  expect(convert('A', 1)).toBe('A');
  expect(convert('ABCDE', 1)).toBe('ABCDE');

  // Test case 4: numRows >= string length (should return original string)
  expect(convert('ABC', 5)).toBe('ABC');

  // Test case 5: numRows = 2
  expect(convert('ABCDE', 2)).toBe('ACEBD'); // A C E / B D

  // Test case 6: Larger example with numRows = 5 (verify pattern conservation)
  const result6 = convert('ABCDEFGHIJKLMNOP', 5);
  expect(result6.length).toBe(16); // No characters lost
  expect([...result6].sort().join('')).toBe('ABCDEFGHIJKLMNOP'); // All characters present

  // Test case 7: Two character string with numRows = 2
  expect(convert('AB', 2)).toBe('AB');

  // Test case 8: Single character
  expect(convert('A', 2)).toBe('A');

  // Test case 9: Three character string with numRows = 3 (forms a pattern)
  expect(convert('ABC', 3)).toBe('ABC');
});
