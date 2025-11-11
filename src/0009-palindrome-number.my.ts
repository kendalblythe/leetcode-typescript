// https://leetcode.com/problems/palindrome-number/

export const isPalindrome1 = (n: number): boolean => {
  const s1 = n.toString();
  const s2 = [...s1].reverse().join('');
  return s1 === s2;
};

export const isPalindrome2 = (n: number): boolean => {
  if (n < 0) return false; // negative sign causes this to always be false
  if (n < 10) return true; // 1 digit always true
  const digitCount = getDigitCount(n);
  let startIndex = 0;
  let endIndex = digitCount - 1;
  while (startIndex < endIndex) {
    const n1 = getDigitPlaceValue(n, startIndex);
    const n2 = getDigitPlaceValue(n, endIndex);
    if (n1 !== n2) return false;
    startIndex++;
    endIndex--;
  }
  return true;
};

const getDigitCount = (n: number): number => {
  let count = 1;
  while (n >= 10 ** count) count++;
  return count;
};

const getDigitPlaceValue = (n: number, place: number): number => {
  const divisor = 10 ** place;
  return Math.floor((n / divisor) % 10);
};
