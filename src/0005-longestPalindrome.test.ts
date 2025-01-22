import { expect, test } from "vitest";

test("5. Longest Palindromic Substring", () => {
  expect(longestPalindrome("babad")).toEqual("bab");
  expect(longestPalindrome("cbbd")).toEqual("bb");
});

const longestPalindrome = (s: string): string => {
  const minSubstrLen = 2;
  const maxSubstrLen = s.length - 1;
  for (let substrLen = maxSubstrLen; substrLen >= minSubstrLen; substrLen--) {
    for (let startIndex = 0; startIndex <= s.length - substrLen; startIndex++) {
      const substr = s.substring(startIndex, startIndex + substrLen);
      const reverseSubstr = [...substr].reverse().join("");
      if (substr === reverseSubstr) return substr;
    }
  }
  return "";
};
