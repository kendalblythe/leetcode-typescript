// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * Given a string `s`, return the longest palindromic substring in `s`.
 * This implementation uses the "Expand Around Center" approach.
 *
 * @param {string} s The input string.
 * @returns {string} The longest palindromic substring.
 */
export function longestPalindrome(s: string): string {
  // Handle edge cases: empty string or single character
  if (s.length < 2) return s;

  // Track the start and end indices of the longest palindrome found
  let start = 0;
  let maxLen = 1; // At minimum, a single character is a palindrome

  /**
   * Helper function to expand around a center point.
   * Checks how far we can expand while characters match on both sides.
   *
   * @param left - Starting left index (also center for odd-length palindromes)
   * @param right - Starting right index (also center for odd-length palindromes)
   * @returns The length of the palindrome found
   */
  const expandAroundCenter = (left: number, right: number): number => {
    // Expand outward while within bounds and characters match
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // Return the length of the palindrome found (right - left - 1 accounts for final mismatch)
    return right - left - 1;
  };

  // Check all possible centers in the string
  for (let i = 0; i < s.length; i++) {
    // Case 1: Odd-length palindrome (single character as center)
    const oddLen = expandAroundCenter(i, i);
    if (oddLen > maxLen) {
      maxLen = oddLen;
      // Calculate start position: move back from center by (length - 1) / 2
      start = i - Math.floor(oddLen / 2);
    }

    // Case 2: Even-length palindrome (center between two characters)
    const evenLen = expandAroundCenter(i, i + 1);
    if (evenLen > maxLen) {
      maxLen = evenLen;
      // Calculate start position: move back from left-center by (length / 2 - 1)
      start = i - Math.floor(evenLen / 2) + 1;
    }
  }

  // Extract and return the substring using start index and length
  return s.substring(start, start + maxLen);
}
