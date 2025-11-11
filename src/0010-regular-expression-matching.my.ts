// https://leetcode.com/problems/regular-expression-matching/

export const isMatch = (s: string, p: string): boolean => {
  // Transform patterns into an object array
  interface Pattern {
    index: number;
    char: string;
    matchZeroOrMore: boolean;
  }

  const patterns: Pattern[] = [];
  let requiredPatternCount = 0;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') continue;

    const pattern: Pattern = {
      index: patterns.length,
      char: p[i],
      matchZeroOrMore: false,
    };

    if (i + 1 < p.length) {
      pattern.matchZeroOrMore = p[i + 1] === '*';
    }

    if (!pattern.matchZeroOrMore) {
      requiredPatternCount++;
    }

    patterns.push(pattern);
  }

  // For empty string, return true if no required patterns, otherwise return false
  if (!s) return !requiredPatternCount;

  // Return false for empty pattern
  if (!p) return false;

  // Return false if more required patterns than string length
  if (s.length < requiredPatternCount) return false;

  // Make sure each string character match a pattern in both directions (forward and reverse)
  const matchedPatternIndexSet = new Set<number>();

  const doesEachCharacterMatchPattern = (s: string, patterns: Pattern[]): boolean => {
    let currentPatternIndex = 0;

    // Make sure each string character match a pattern
    for (const char of s) {
      let match: boolean | undefined;
      while (match === undefined && currentPatternIndex < patterns.length) {
        const currentPattern = patterns[currentPatternIndex];
        if (char === currentPattern.char || currentPattern.char === '.') {
          // Match
          match = true;
          matchedPatternIndexSet.add(currentPattern.index);
          if (!currentPattern.matchZeroOrMore) {
            currentPatternIndex++;
          }
        } else if (currentPattern.matchZeroOrMore) {
          // Check next pattern for match
          match = undefined;
          currentPatternIndex++;
        } else {
          // Not match
          match = false;
        }
      }

      // Stop here if not a match
      if (!match) return false;
    }

    // All string characters match a pattern
    return true;
  };

  const reverseString = (s: string) => s.split('').reverse().join('');

  const forwardMatch = doesEachCharacterMatchPattern(s, patterns);
  const reverseMatch = doesEachCharacterMatchPattern(reverseString(s), patterns.toReversed());

  if (!forwardMatch || !reverseMatch) return false;

  // Make sure all patterns have a match
  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i];
    if (pattern.matchZeroOrMore) {
      // Match zero or more patterns always have match
    } else {
      if (!matchedPatternIndexSet.has(i)) return false; // Pattern doesn't have match
    }
  }

  return true;
};
