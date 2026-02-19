// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * Given a string `s`, find the length of the longest substring without repeating characters.
 *
 * @param {string} s The input string.
 * @returns {number} The length of the longest substring without repeating characters.
 */
export function lengthOfLongestSubstring(s: string): number {
  // Use a sliding window approach with a Map to track character indices
  // This allows us to quickly find where the last occurrence of a repeated character was
  const charIndex = new Map<string, number>();

  let maxLength = 0; // Track the longest substring found
  let left = 0; // Left pointer of the sliding window

  // Iterate through the string with the right pointer
  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If the character is already in our window, move the left pointer
    // to the right of the previous occurrence of this character
    if (charIndex.has(char)) {
      // Only move left pointer forward if the previous occurrence is within current window
      left = Math.max(left, (charIndex.get(char) ?? 0) + 1);
    }

    // Update the current character's most recent index
    charIndex.set(char, right);

    // Update the maximum length found so far
    // Current window size is from left to right (inclusive)
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
