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
  const m = s.length;
  const n = p.length;

  // dp[i][j] is true if the first i characters of s match the first j characters of p
  // Size (m+1) x (n+1) for easier indexing corresponding to string lengths.
  const dp: boolean[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(false));

  // Base case: empty string matches empty pattern
  dp[0][0] = true;

  // Initialize first row: Handle patterns like a*, a*b*, a*b*c* matching an empty string s
  for (let j = 1; j <= n; j++) {
    // If pattern char is '*', it can match zero of the preceding element (p[j-2])
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const sChar = s[i - 1];
      const pChar = p[j - 1];

      if (pChar === '.' || pChar === sChar) {
        // Case 1: Current characters match or pattern has '.' (matches any single character)
        dp[i][j] = dp[i - 1][j - 1];
      } else if (pChar === '*') {
        // Case 2: Pattern character is '*'
        const prevPChar = p[j - 2]; // The character '*' applies to

        // Subcase 2a: '*' matches zero occurrences of the preceding element (p[j-2]).
        // We check if s[0...i-1] matches p[0...j-3] (effectively skipping 'x*').
        dp[i][j] = dp[i][j - 2];

        // Subcase 2b: '*' matches one or more occurrences of the preceding element.
        // This is possible only if s[i-1] matches p[j-2] (or p[j-2] is '.').
        if (prevPChar === '.' || prevPChar === sChar) {
          // If it matches, we check if s[0...i-2] matches p[0...j-1] (i.e., '*' consumes one more character from s).
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
      // If none of the above, dp[i][j] remains false (default initialization).
    }
  }

  // The result is whether the entire string s matches the entire pattern p.
  return dp[m][n];
}
