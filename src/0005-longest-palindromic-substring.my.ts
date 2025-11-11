// https://leetcode.com/problems/longest-palindromic-substring/

export const longestPalindrome = (s: string): string => {
  const minSubstrLen = 2;
  const maxSubstrLen = s.length;
  for (let substrLen = maxSubstrLen; substrLen >= minSubstrLen; substrLen--) {
    for (let startIndex = 0; startIndex <= s.length - substrLen; startIndex++) {
      const substr = s.substring(startIndex, startIndex + substrLen);
      const reverseSubstr = [...substr].reverse().join('');
      if (substr === reverseSubstr) return substr;
    }
  }
  return s.charAt(0);
};
