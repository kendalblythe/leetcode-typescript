// https://leetcode.com/problems/add-two-numbers/description/
import { expect, test } from 'vitest';

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

test('2. Add Two Numbers', () => {
  let l1 = arrayToList([2, 4, 3]);
  let l2 = arrayToList([5, 6, 4]);
  let l3 = arrayToList([7, 0, 8]);
  expect(addTwoNumbers(l1, l2)).toEqual(l3);

  l1 = arrayToList([0]);
  l2 = arrayToList([0]);
  l3 = arrayToList([0]);
  expect(addTwoNumbers(l1, l2)).toEqual(l3);

  l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
  l2 = arrayToList([9, 9, 9, 9]);
  l3 = arrayToList([8, 9, 9, 9, 0, 0, 0, 1]);
  expect(addTwoNumbers(l1, l2)).toEqual(l3);

  expect(addTwoNumbers(l1, null)).toBeNull();
  expect(addTwoNumbers(null, l2)).toBeNull();
  expect(addTwoNumbers(null, null)).toBeNull();
});

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  if (l1 === null || l2 === null) {
    return null;
  }
  const n1 = arrayToNumber(listToArray(l1));
  const n2 = arrayToNumber(listToArray(l2));
  return arrayToList(numberToArray(n1 + n2));
};

const arrayToList = (array: number[]): ListNode | null => {
  let prevNode: ListNode | null = null;
  let currNode: ListNode | undefined;
  for (let i = array.length - 1; i >= 0; i--) {
    currNode = new ListNode(array[i], prevNode);
    prevNode = currNode;
  }
  return currNode ?? null;
};

const listToArray = (list: ListNode | null): number[] => {
  if (list === null) {
    return [];
  }
  const array: number[] = [];
  let l = list;
  array.push(l.val);
  while (l.next) {
    l = l.next;
    array.push(l.val);
  }
  return array;
};

const arrayToNumber = (array: number[]): number => {
  return array.reduce((prev, curr, index) => {
    return prev + curr * 10 ** index;
  }, 0);
};

const numberToArray = (num: number): number[] => {
  return [...num.toString()].toReversed().map((s) => Number.parseInt(s));
};
