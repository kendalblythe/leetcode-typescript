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
  // Define 32-bit signed integer boundaries
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  // Step 1: Skip leading whitespace
  let i = 0;
  while (i < s.length && s[i] === ' ') {
    i++;
  }

  // Step 2: Check for sign (+ or -), default to positive
  let isNegative = false;
  if (i < s.length && (s[i] === '-' || s[i] === '+')) {
    isNegative = s[i] === '-';
    i++;
  }

  // Step 3: Read digits until non-digit or end of string
  let result = 0;
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    // Get the digit value (0-9)
    const digit = s.charCodeAt(i) - '0'.charCodeAt(0);

    // Check and prevent overflow before updating result
    // If result > INT_MAX / 10, or result == INT_MAX / 10 but digit will overflow
    if (result > INT_MAX / 10 || (result === Math.floor(INT_MAX / 10) && digit > 7)) {
      // Return clamped value based on sign
      return isNegative ? INT_MIN : INT_MAX;
    }

    // Add the digit to result
    result = result * 10 + digit;
    i++;
  }

  // Step 4 & 5: Apply sign and return result
  // Avoid returning -0 by returning 0 when result is 0
  return result === 0 ? 0 : isNegative ? -result : result;
}
