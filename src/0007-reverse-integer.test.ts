// https://leetcode.com/problems/reverse-integer/

import { expect, test } from 'vitest';
import { reverse as aiReverse } from './0007-reverse-integer.ai';
import { reverse as myReverse } from './0007-reverse-integer.my';

test.each([
  ['myReverse', myReverse],
  ['aiReverse', aiReverse],
])('Reverse Integer - %s', (_funcName, reverse) => {
  // Test case 1: Standard positive
  expect(reverse(123)).toBe(321);

  // Test case 2: Standard negative
  expect(reverse(-123)).toBe(-321);

  // Test case 3: Trailing zero
  expect(reverse(120)).toBe(21);

  // Test case 4: Positive overflow (2^31 - 1 = 2147483647). Reversing 1534236469 gives 9646324351, which overflows.
  expect(reverse(1534236469)).toBe(0);

  // Test case 5: Negative overflow (-(2^31) = -2147483648). Reversing -1534236469 gives -9646324351, which overflows.
  expect(reverse(-1534236469)).toBe(0);

  // Test case 6: Max value boundary check (2147483647)
  expect(reverse(1463847412)).toBe(2147483641); // Reverses to 2147483641 (valid)
  expect(reverse(2147483647)).toBe(0); // Reverses to 7463847412 (overflow)

  // Test case 7: Min value boundary check (-2147483648)
  expect(reverse(-1463847412)).toBe(-2147483641); // Reverses to -2147483641 (valid)
  expect(reverse(-2147483648)).toBe(0); // Reverses to -8463847412 (overflow)

  // Test case 8: Single digit
  expect(reverse(5)).toBe(5);
});
