// https://leetcode.com/problems/regular-expression-matching/

import { expect, test } from 'vitest';
import { isMatch as aiIsMatch } from './0010-regular-expression-matching.ai';
import { isMatch as myIsMatch } from './0010-regular-expression-matching.my';

test.each([
  ['myIsMatch', myIsMatch],
  ['aiIsMatch', aiIsMatch],
])('Regular Expression Matching - %s', (_funcName, isMatch) => {
  // Basic matches
  expect(isMatch('aa', 'aa')).toBeTruthy();
  expect(isMatch('aa', 'a')).toBeFalsy();
  expect(isMatch('a', 'aa')).toBeFalsy();
  expect(isMatch('aa', 'ab')).toBeFalsy();

  // '.' matches any single character
  expect(isMatch('a', 'a.')).toBeFalsy(); // s='a', p='a.' -> false (s too short)
  expect(isMatch('ab', 'a.')).toBeTruthy();
  expect(isMatch('abc', 'a.')).toBeFalsy();

  // '*' matches zero or more of the preceding element
  expect(isMatch('a', 'a*')).toBeTruthy(); // a* matches zero 'a's
  expect(isMatch('aa', 'a*')).toBeTruthy(); // a* matches two 'a's
  expect(isMatch('aaa', 'a*')).toBeTruthy(); // a* matches three 'a's
  expect(isMatch('aab', 'a*b')).toBeTruthy(); // a* matches 'aa', b matches 'b'
  expect(isMatch('mississippi', 'mis*is*p*.')).toBeFalsy(); // Example from problem description

  // Combination of '.' and '*'
  expect(isMatch('ab', '.*')).toBeTruthy(); // .* matches 'ab'
  expect(isMatch('aab', 'c*a*b')).toBeTruthy(); // c* matches zero 'c's, a* matches 'aa', b matches 'b'
  expect(isMatch('mississippi', 'mis*is*ip*.')).toBeTruthy(); // s* matches 'ss', s* matches 'ss', p* matches 'pp', . matches 'i'

  // Edge cases
  expect(isMatch('', 'a*')).toBeTruthy(); // Zero length string matches a*
  expect(isMatch('', '.*')).toBeTruthy();
  expect(isMatch('', 'c*a*b')).toBeFalsy();
  expect(isMatch('a', 'ab*')).toBeTruthy(); // b* matches zero 'b's
  expect(isMatch('bbbba', '.*a*a')).toBeTruthy();
});
