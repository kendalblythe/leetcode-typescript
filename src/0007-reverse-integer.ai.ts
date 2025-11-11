// https://leetcode.com/problems/reverse-integer/

/**
 * Reverses the digits of a 32-bit signed integer `x`.
 * If reversing `x` causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 *
 * @param {number} x The integer to reverse.
 * @returns {number} The reversed integer, or 0 if overflow occurs.
 */
export function reverse(x: number): number {
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  const INT_MIN = -(2 ** 31); // -2147483648

  let reversed = 0;
  // Work with the absolute value of x
  let input = Math.abs(x);
  // Store the original sign
  const sign = x < 0 ? -1 : 1;

  while (input > 0) {
    const digit = input % 10;

    // Overflow check for positive result (before multiplying reversed by 10)
    // If reversed > INT_MAX / 10, overflow is guaranteed on multiplication.
    // If reversed == INT_MAX / 10, overflow occurs if the next digit is > 7 (since INT_MAX ends in 7).
    if (
      reversed > Math.floor(INT_MAX / 10) ||
      (reversed === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return 0;
    }

    // Build the reversed number
    reversed = reversed * 10 + digit;
    // Move to the next digit
    input = Math.floor(input / 10);
  }

  const result = reversed * sign;

  // Final check for negative overflow (INT_MIN is -2147483648, which ends in 8)
  // Note: The positive overflow check already handles the magnitude up to 2147483647.
  // If x was negative and reversed magnitude is 2147483648, it will be caught here.
  if (result < INT_MIN || result > INT_MAX) {
    return 0;
  }

  return result;
}
