// https://leetcode.com/problems/add-two-numbers/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  if (l1 === null && l2 === null) {
    return null;
  }
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  const n1 = Number(reverseString(listToNumString(l1)));
  const n2 = Number(reverseString(listToNumString(l2)));
  return numStringToList(reverseString((n1 + n2).toString()));
};

const numStringToList = (numString: string): ListNode | null => {
  if (Number.isNaN(Number(numString))) {
    return null;
  }
  let prevNode: ListNode | null = null;
  let currNode: ListNode | undefined;
  for (let i = numString.length - 1; i >= 0; i--) {
    const n = Number(numString.charAt(i));
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
  return s.split('').reverse().join('');
};
