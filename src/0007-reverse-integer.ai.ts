// https://leetcode.com/problems/reverse-integer/

/**
 * Reverses the digits of a 32-bit signed integer `x`.
 * If reversing `x` causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 *
 * @param {number} x The integer to reverse.
 * @returns {number} The reversed integer, or 0 if overflow occurs.
 */
export function reverse(x: number): number {
  // Define the 32-bit signed integer boundaries
  const MAX_INT32 = 2147483647; // 2^31 - 1

  // Extract the sign and work with the absolute value
  const sign = x < 0 ? -1 : 1;
  let num = Math.abs(x);

  // Reverse the digits by repeatedly extracting and building the reversed number
  let reversed = 0;

  while (num > 0) {
    // Extract the last digit from the original number using modulo
    const digit = num % 10;

    // Check for overflow before shifting left and adding the new digit
    // If reversed > 214748364 (floor(MAX_INT32 / 10)), the next operation will overflow
    if (reversed > Math.floor(MAX_INT32 / 10)) {
      return 0;
    }

    // Additional overflow check: if reversed equals the floor division
    // and the digit is > 7, the result (214748364 * 10 + digit) exceeds MAX_INT32
    if (reversed === Math.floor(MAX_INT32 / 10) && digit > 7) {
      return 0;
    }

    // Build the reversed number by shifting left one decimal place and adding the digit
    reversed = reversed * 10 + digit;

    // Remove the last digit from the original number for next iteration
    num = Math.floor(num / 10);
  }

  // Apply the original sign to the reversed number and return
  return sign * reversed;
}
