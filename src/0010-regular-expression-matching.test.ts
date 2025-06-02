// https://leetcode.com/problems/regular-expression-matching/description/
import { expect, test } from 'vitest';

test('10. Regular Expression Matching', () => {
  expect(isMatch('aa', 'aa')).toBeTruthy();
  expect(isMatch('aa', 'a')).toBeFalsy();
  expect(isMatch('a', 'aa')).toBeFalsy();
  expect(isMatch('aa', 'ab')).toBeFalsy();

  expect(isMatch('a', 'a*')).toBeTruthy();
  expect(isMatch('aa', 'a*')).toBeTruthy();
  expect(isMatch('aaa', 'a*')).toBeTruthy();
  expect(isMatch('aab', 'a*')).toBeFalsy();

  expect(isMatch('a', 'a.')).toBeFalsy();
  expect(isMatch('aa', 'a.')).toBeTruthy();
  expect(isMatch('ab', 'a.')).toBeTruthy();
  expect(isMatch('abc', 'a.')).toBeFalsy();

  expect(isMatch('abcdefg', '.*')).toBeTruthy();

  expect(isMatch('abc', 'abc*')).toBeTruthy();
  expect(isMatch('abcc', 'abc*')).toBeTruthy();
  expect(isMatch('abcd', 'abc*')).toBeFalsy();

  expect(isMatch('abbbc', 'ab*c')).toBeTruthy();
  expect(isMatch('abbbcd', 'ab*c')).toBeFalsy();
  expect(isMatch('abbbc', 'ab*cd')).toBeFalsy();

  expect(isMatch('abc', 'a*b*c*')).toBeTruthy();
  expect(isMatch('aabc', 'a*b*c*')).toBeTruthy();
  expect(isMatch('aabbc', 'a*b*c*')).toBeTruthy();
  expect(isMatch('aabbcc', 'a*b*c*')).toBeTruthy();
  expect(isMatch('aabbccd', 'a*b*c*')).toBeFalsy();
  expect(isMatch('abcabc', 'a*b*c*')).toBeFalsy();
  expect(isMatch('aacc', 'a*b*c*')).toBeFalsy();
});

const isMatch = (s: string, p: string): boolean => {
  let stringIndex = 0;
  let patternIndex = 0;
  let prevStringChar = '';
  while (stringIndex < s.length || patternIndex < p.length) {
    const stringChar = s.charAt(stringIndex);
    const patternChar = p.charAt(patternIndex);
    let hasMatch = false;
    switch (patternChar) {
      case '.':
        hasMatch = !!stringChar;
        prevStringChar = patternChar;
        stringIndex++;
        patternIndex++;
        break;
      case '*':
        hasMatch = stringChar === prevStringChar || (!!stringChar && prevStringChar === '.');
        if (hasMatch) {
          stringIndex++;
        } else {
          hasMatch = true;
          patternIndex++;
        }
        break;
      default:
        hasMatch = stringChar === patternChar;
        prevStringChar = stringChar;
        stringIndex++;
        patternIndex++;
        break;
    }
    if (!hasMatch) return false;
  }
  return true;
};
