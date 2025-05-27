// https://leetcode.com/problems/string-to-integer-atoi/description/
import { expect, test } from 'vitest';

test('8. String to integer atoi', () => {
  expect(stringToInteger('42')).toEqual(42);
  expect(stringToInteger(' -042')).toEqual(-42);
  expect(stringToInteger('1337c0d3')).toEqual(1337);
  expect(stringToInteger('0-1')).toEqual(0);
  expect(stringToInteger('words and 987')).toEqual(0);
  expect(stringToInteger('+9888777666')).toEqual(MAX_VALUE);
  expect(stringToInteger('-9888777666')).toEqual(MIN_VALUE);
});

const MAX_VALUE = 2 ** 31 - 1;
const MIN_VALUE = 2 ** 31 * -1;

const stringToInteger = (s: string): number => {
  let trimmedStr = trimLeadingWhitespace(s);
  let isNegative = false;
  if (trimmedStr.startsWith('+')) {
    trimmedStr = trimmedStr.substring(1);
  } else if (trimmedStr.startsWith('-')) {
    isNegative = true;
    trimmedStr = trimmedStr.substring(1);
  }
  let num = getLeadingDigits(trimmedStr);
  num = isNegative ? -num : num;
  return Math.max(Math.min(num, MAX_VALUE), MIN_VALUE);
};

const trimLeadingWhitespace = (s: string): string => {
  let trimmedStr = s;
  while (trimmedStr.match(/^\s/)) {
    trimmedStr = trimmedStr.substring(1);
  }
  return trimmedStr;
};

const getLeadingDigits = (s: string): number => {
  let digitsStr = '';
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c.match(/^[0-9]/)) {
      digitsStr += c;
    } else {
      break;
    }
  }
  return digitsStr ? parseInteger(digitsStr) : 0;
};

const parseInteger = (numStr: string): number => {
  let n = 0;
  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr.charCodeAt(i) - '0'.charCodeAt(0);
    const exp = numStr.length - i - 1;
    n += digit * 10 ** exp;
  }
  return n;
};
