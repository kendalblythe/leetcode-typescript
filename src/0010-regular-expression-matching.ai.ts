// https://leetcode.com/problems/regular-expression-matching/

/**
 * Implements regular expression matching with support for '.' and '*'.
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 *
 * @param {string} s The input string.
 * @param {string} p The pattern.
 * @returns {boolean} True if the string matches the pattern, false otherwise.
 */
export function isMatch(s: string, p: string): boolean {
  // Create a 2D DP table where dp[i][j] represents whether s[0...i-1] matches p[0...j-1]
  const dp: boolean[][] = Array.from({ length: s.length + 1 }, () =>
    Array(p.length + 1).fill(false)
  );

  // Base case: empty string matches empty pattern
  dp[0][0] = true;

  // Handle patterns like a*, a*b*, etc. that can match empty strings
  // If pattern has '*', it can match zero occurrences of the preceding character
  for (let j = 2; j <= p.length; j++) {
    // If current pattern character is '*', we can skip both the character and the '*'
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // Fill the DP table bottom-up
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      // If the current pattern character is '*'
      if (p[j - 1] === '*') {
        // Case 1: '*' matches zero occurrences of the preceding character
        // We skip both the preceding character and the '*' in the pattern
        dp[i][j] = dp[i][j - 2];

        // Case 2: '*' matches one or more occurrences
        // This is possible if the preceding character matches the current string character
        // (or the preceding character is '.' which matches any character)
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          // If we can match, use the previous row result (consume one more char from string)
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else {
        // If current pattern character is not '*'
        // Check if it matches the current string character
        if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
          // If it matches, the result depends on whether previous parts match
          dp[i][j] = dp[i - 1][j - 1];
        }
        // If it doesn't match, dp[i][j] remains false (default value)
      }
    }
  }

  // Return whether the entire string matches the entire pattern
  return dp[s.length][p.length];
}
