// https://leetcode.com/problems/palindrome-number/

/**
 * Checks if an integer `x` is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * @param {number} x The integer to check.
 * @returns {boolean} True if x is a palindrome, false otherwise.
 */
export function isPalindrome(x: number): boolean {
  // Negative numbers are not palindromes (e.g., -121 != 121-)
  // Numbers ending in 0 (except 0 itself) cannot be palindromes because the leading digit cannot be 0.
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversedHalf = 0;
  let original = x;

  // Build the reversed second half of the number. Stop when reversedHalf >= original.
  while (original > reversedHalf) {
    // Append the last digit of 'original' to 'reversedHalf'
    reversedHalf = reversedHalf * 10 + (original % 10);
    // Remove the last digit from 'original'
    original = Math.floor(original / 10);
  }

  // For even length numbers (e.g., 1221), original == reversedHalf (12 == 12).
  // For odd length numbers (e.g., 121), the middle digit is in reversedHalf (12). We discard it by dividing by 10.
  // original (1) == Math.floor(reversedHalf / 10) (floor(12/10) = 1).
  return original === reversedHalf || original === Math.floor(reversedHalf / 10);
}
