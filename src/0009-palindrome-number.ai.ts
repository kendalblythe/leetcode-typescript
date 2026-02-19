// https://leetcode.com/problems/palindrome-number/

/**
 * Checks if an integer `x` is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * @param {number} x The integer to check.
 * @returns {boolean} True if x is a palindrome, false otherwise.
 */
export function isPalindrome(x: number): boolean {
  // Negative numbers are not palindromes by definition
  if (x < 0) {
    return false;
  }

  // Numbers ending in zero (except 0 itself) are not palindromes
  if (x !== 0 && x % 10 === 0) {
    return false;
  }

  // Convert the number to a string representation
  const str = x.toString();

  // Compare the string with its reverse to check if it's a palindrome
  return str === str.split('').reverse().join('');
}
