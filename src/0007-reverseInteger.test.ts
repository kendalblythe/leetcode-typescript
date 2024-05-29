test("7. Reverse Integer", () => {
  expect(reverseInteger(123)).toEqual(321);
  expect(reverseInteger(-123)).toEqual(-321);
  expect(reverseInteger(120)).toEqual(21);
});

const reverseInteger = (n: number): number => {
  const s = n.toString();
  const reverseS = [...s].reverse().join("");
  const reverseN = Number.parseFloat(reverseS);
  return n < 0 ? -reverseN : reverseN;
};
