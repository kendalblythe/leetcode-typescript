// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  /**
   * Initializes a new list node.
   * @param {number} [val=0] The value of the node.
   * @param {ListNode | null} [next=null] The next node in the list.
   */
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * @param {ListNode | null} l1 The first linked list.
 * @param {ListNode | null} l2 The second linked list.
 * @returns {ListNode | null} The head of the resulting linked list sum.
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // Dummy head to simplify list construction. The result starts at dummyHead.next.
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  // Iterate as long as there are digits in either list or a carry remains.
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Get the value from the current node, or 0 if the list is exhausted.
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // Calculate the sum of digits plus any carry from the previous step.
    const sum = val1 + val2 + carry;

    // Determine the new carry (the tens digit of the sum).
    carry = Math.floor(sum / 10);
    // Determine the digit for the new node (the ones digit of the sum).
    const digit = sum % 10;

    // Create a new node with the calculated digit and append it to the result list.
    current.next = new ListNode(digit);
    current = current.next;

    // Move pointers forward in the input lists if they are not null.
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // Return the head of the actual resulting list (skipping the dummy head).
  return dummyHead.next;
}
