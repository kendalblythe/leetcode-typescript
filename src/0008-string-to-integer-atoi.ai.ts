// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * Implements the string to integer (atoi) function according to specified rules.
 *
 * The algorithm for myAtoi(string s) is as follows:
 * 1. Read in and ignore any leading whitespace.
 * 2. Check if the next character is '-' or '+'. Determine the sign.
 * 3. Read in next the characters until the next non-digit character or the end of the input is reached.
 * 4. Convert these digits into an integer.
 * 5. Apply the sign.
 * 6. Clamp the result to the 32-bit signed integer range [-2^31, 2^31 - 1].
 *
 * @param {string} s The input string.
 * @returns {number} The converted integer.
 */
export function myAtoi(s: string): number {
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  const INT_MIN = -(2 ** 31); // -2147483648

  let i = 0;
  let sign = 1;
  let result = 0;

  // 1. Read in and ignore any leading whitespace.
  while (i < s.length && s[i] === ' ') {
    i++;
  }

  // 2. Check if the next character is '-' or '+'. Determine the sign.
  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  // 3. Read in next the characters until the next non-digit character or the end of the input is reached.
  while (i < s.length) {
    const char = s[i];
    // Convert character to digit (e.g., '5' -> 5)
    const digit = char.charCodeAt(0) - '0'.charCodeAt(0);

    if (digit < 0 || digit > 9) {
      break; // Stop if the character is not a digit
    }

    // 4. Convert these digits into an integer and check for overflow before updating result.
    // Determine the clamping limit based on the sign.
    const limit = sign === 1 ? INT_MAX : Math.abs(INT_MIN);
    const limitDiv10 = Math.floor(limit / 10);

    // Check if multiplying 'result' by 10 and adding 'digit' will exceed the limit.
    if (result > limitDiv10 || (result === limitDiv10 && digit > limit % 10)) {
      // If overflow detected, return the appropriate clamped value immediately.
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  // 5. Apply the sign.
  if (result === 0) {
    return 0;
  }
  result *= sign;

  // 6. Clamp the result to the 32-bit signed integer range.
  // This final check is technically redundant if the in-loop check is perfect for both signs,
  // but serves as a final safeguard, especially for the negative boundary (-2^31).
  if (result > INT_MAX) return INT_MAX;
  if (result < INT_MIN) return INT_MIN;

  return result;
}
