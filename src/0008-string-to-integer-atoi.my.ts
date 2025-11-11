// https://leetcode.com/problems/string-to-integer-atoi/

const MAX_VALUE = 2 ** 31 - 1;
const MIN_VALUE = 2 ** 31 * -1;

export const myAtoi = (s: string): number => {
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
  num = Math.max(Math.min(num, MAX_VALUE), MIN_VALUE);
  return num === 0 ? 0 : num;
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
