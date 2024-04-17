test("2. Add Two Numbers", () => {
  expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
  expect(addTwoNumbers([0], [0])).toEqual([0]);
  expect(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([
    8, 9, 9, 9, 0, 0, 0, 1,
  ]);
});

const addTwoNumbers = (list1: number[], list2: number[]): number[] => {
  const num1 = listToNumber(list1);
  const num2 = listToNumber(list2);
  return numberToList(num1 + num2);
};

const listToNumber = (list: number[]): number => {
  return list.reduce((prev, curr, index) => {
    return prev + curr * 10 ** index;
  }, 0);
};

const numberToList = (num: number): number[] => {
  return [...num.toString()].toReversed().map((s) => Number.parseInt(s));
};
