test("7. Reverse Integer", () => {
  expect(reverseInteger(123)).toEqual(321);
  expect(reverseInteger(-123)).toEqual(-321);
  expect(reverseInteger(120)).toEqual(21);
  expect(reverseInteger(9888777666)).toEqual(0);
  expect(reverseInteger(-9888777666)).toEqual(0);
});

const MAX_VALUE = 2 ** 31 - 1;
const MIN_VALUE = 2 ** 31 * -1;

const reverseInteger = (n: number): number => {
  const s = n.toString();
  const reverseS = [...s].reverse().join("");
  const reverseN = Number.parseFloat(reverseS);
  const num = n < 0 ? -reverseN : reverseN;
  return num < MIN_VALUE || num > MAX_VALUE ? 0 : num;
};
