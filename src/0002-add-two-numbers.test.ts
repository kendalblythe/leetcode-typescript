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
  let l1 = numStringToList('243');
  let l2 = numStringToList('564');
  let l3 = numStringToList('708');
  expect(addTwoNumbers(l1, l2)).toEqual(l3);

  l1 = numStringToList('0');
  l2 = numStringToList('0');
  l3 = numStringToList('0');
  expect(addTwoNumbers(l1, l2)).toEqual(l3);

  l1 = numStringToList('9999999');
  l2 = numStringToList('9999');
  l3 = numStringToList('89990001');
  expect(addTwoNumbers(l1, l2)).toEqual(l3);

  expect(addTwoNumbers(l1, null)).toBeNull();
  expect(addTwoNumbers(null, l2)).toBeNull();
  expect(addTwoNumbers(null, null)).toBeNull();
});

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  if (l1 === null || l2 === null) {
    return null;
  }
  const n1 = parseInt(reverseString(listToNumString(l1)));
  const n2 = parseInt(reverseString(listToNumString(l2)));
  return numStringToList(reverseString((n1 + n2).toString()));
};

const numStringToList = (numString: string): ListNode | null => {
  if (isNaN(parseInt(numString))) {
    return null;
  }
  let prevNode: ListNode | null = null;
  let currNode: ListNode | undefined;
  for (let i = numString.length - 1; i >= 0; i--) {
    const n = parseInt(numString.charAt(i));
    currNode = new ListNode(n, prevNode);
    prevNode = currNode;
  }
  return currNode ?? null;
};

const listToNumString = (list: ListNode | null): string => {
  if (list === null) {
    return '';
  }
  let numString = list.val.toString();
  let l = list;
  while (l.next) {
    l = l.next;
    numString = numString.concat(l.val.toString());
  }
  return numString;
};

const reverseString = (s: string): string => {
  return s.split('').toReversed().join('');
};
