// https://leetcode.com/problems/reverse-integer/

const MAX_VALUE = 2 ** 31 - 1;
const MIN_VALUE = 2 ** 31 * -1;

export const reverse = (n: number): number => {
  const s = n.toString();
  const reverseS = [...s].reverse().join('');
  const reverseN = Number.parseFloat(reverseS);
  const num = n < 0 ? -reverseN : reverseN;
  return num < MIN_VALUE || num > MAX_VALUE ? 0 : num;
};
