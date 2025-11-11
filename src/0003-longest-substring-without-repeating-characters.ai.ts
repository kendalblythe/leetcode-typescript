// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * Given a string `s`, find the length of the longest substring without repeating characters.
 *
 * @param {string} s The input string.
 * @returns {number} The length of the longest substring without repeating characters.
 */
export function lengthOfLongestSubstring(s: string): number {
  // Tracks the maximum length found so far.
  let maxLength = 0;
  // 'start' is the left boundary of the current sliding window.
  let start = 0;
  // Map to store the last seen index of each character.
  const charIndexMap = new Map<string, number>();

  // 'end' is the right boundary of the sliding window, expanding one character at a time.
  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (charIndexMap.has(char)) {
      // If the character is a repeat, we must shrink the window from the left ('start').
      // We move 'start' to be one position after the last occurrence of this character,
      // but only if that last occurrence is within or at the current 'start' boundary.
      // Math.max ensures 'start' only moves forward, never backward.
      // biome-ignore lint/style/noNonNullAssertion: if statement above checks for existence
      start = Math.max(start, charIndexMap.get(char)! + 1);
    }

    // Update the character's index to its current position (the right boundary).
    charIndexMap.set(char, end);

    // Calculate the current window size (end - start + 1) and update maxLength if larger.
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
