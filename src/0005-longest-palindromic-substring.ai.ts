// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * Given a string `s`, return the longest palindromic substring in `s`.
 * This implementation uses the "Expand Around Center" approach.
 *
 * @param {string} s The input string.
 * @returns {string} The longest palindromic substring.
 */
export function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s;
  }

  // 'start' tracks the starting index of the longest palindrome found.
  let start = 0;
  // 'maxLength' tracks the length of the longest palindrome found (initialized to 1 for single characters).
  let maxLength = 1;

  /**
   * Helper function to expand outwards from a center point (or two center points)
   * to find the longest palindrome centered there.
   * @param left The left index of the potential center.
   * @param right The right index of the potential center.
   */
  const expandAroundCenter = (left: number, right: number): void => {
    // Expand as long as boundaries are valid and characters match.
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      // If this palindrome is longer than the current max, update max length and start index.
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left;
      }
      left--;
      right++;
    }
  };

  // Iterate through every character, treating it as a potential center.
  for (let i = 0; i < s.length; i++) {
    // Check for odd length palindromes (center at i, e.g., "aba")
    expandAroundCenter(i, i);
    // Check for even length palindromes (center between i and i+1, e.g., "abba")
    expandAroundCenter(i, i + 1);
  }

  // Return the substring corresponding to the longest palindrome found.
  return s.substring(start, start + maxLength);
}
