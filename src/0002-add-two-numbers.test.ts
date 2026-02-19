// https://leetcode.com/problems/add-two-numbers/

import { expect, test } from 'vitest';
import { addTwoNumbers as aiAddTwoNumbers, ListNode } from './0002-add-two-numbers.ai';
import { addTwoNumbers as myAddTwoNumbers } from './0002-add-two-numbers.my';

test.each([
  ['myAddTwoNumbers', myAddTwoNumbers],
  ['aiAddTwoNumbers', aiAddTwoNumbers],
])('Add Two Numbers - %s', (_funcName, addTwoNumbers) => {
  // Test case 1: 342 + 465 = 807 (represented as [2,4,3] + [5,6,4] = [7,0,8])
  let l1 = createList([2, 4, 3]);
  let l2 = createList([5, 6, 4]);
  let expected = createList([7, 0, 8]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual(listToArray(expected));

  // Test case 2: 0 + 0 = 0
  l1 = createList([0]);
  l2 = createList([0]);
  expected = createList([0]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual(listToArray(expected));

  // Test case 3: 9999999 + 9999 = 10009998 (represented as [9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1])
  l1 = createList([9, 9, 9, 9, 9, 9, 9]);
  l2 = createList([9, 9, 9, 9]);
  expected = createList([8, 9, 9, 9, 0, 0, 0, 1]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual(listToArray(expected));

  // Test case 4: Single digit addition with carry
  l1 = createList([9, 9]);
  l2 = createList([1]);
  expected = createList([0, 0, 1]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual(listToArray(expected));

  // Test case 5: Different lengths, no carry
  l1 = createList([1, 2, 3]);
  l2 = createList([4, 5]);
  expected = createList([5, 7, 3]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual(listToArray(expected));

  // Test case 6: Longer list, with carries
  l1 = createList([2, 4, 3, 2, 4, 3]);
  l2 = createList([5, 6, 4]);
  expected = createList([7, 0, 8, 2, 4, 3]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual(listToArray(expected));

  // Test case 7: One list is null
  l1 = createList([1, 2, 3]);
  l2 = null;
  expected = createList([1, 2, 3]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual(listToArray(expected));

  // Test case 8: Other list is null
  l1 = null;
  l2 = createList([4, 5]);
  expected = createList([4, 5]);
  expect(listToArray(addTwoNumbers(l1, l2))).toEqual(listToArray(expected));

  // Test case 9: Both lists are null
  l1 = null;
  l2 = null;
  expect(addTwoNumbers(l1, l2)).toBeNull();
});

// Helper function to create a list from an array of digits (least significant digit first)
const createList = (digits: number[]): ListNode | null => {
  if (digits.length === 0) return null;
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  for (const digit of digits) {
    current.next = new ListNode(digit);
    current = current.next;
  }
  return dummyHead.next;
};

// Helper function to convert a list to an array of digits for easy comparison
const listToArray = (list: ListNode | null): number[] => {
  const result: number[] = [];
  let current = list;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};
