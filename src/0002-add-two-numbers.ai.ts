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
  // Handle edge cases where one or both lists are null
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  // Create a dummy node to simplify the logic of creating the result list
  const dummyHead = new ListNode(0);
  let current = dummyHead;

  // Initialize carry to 0 at the start
  let carry = 0;

  // Traverse both lists simultaneously until both are exhausted
  while (l1 !== null || l2 !== null || carry > 0) {
    // Get the value from l1, or 0 if l1 is exhausted
    const val1 = l1 !== null ? l1.val : 0;
    // Get the value from l2, or 0 if l2 is exhausted
    const val2 = l2 !== null ? l2.val : 0;

    // Calculate the sum of the two digits plus any carry from the previous iteration
    const sum = val1 + val2 + carry;

    // The digit to store is the remainder when divided by 10
    const digit = sum % 10;

    // Update carry: if sum >= 10, carry will be 1, otherwise 0
    carry = Math.floor(sum / 10);

    // Create a new node with the calculated digit and append it to the result
    current.next = new ListNode(digit);
    current = current.next;

    // Move to the next node in l1 if it exists
    l1 = l1 !== null ? l1.next : null;
    // Move to the next node in l2 if it exists
    l2 = l2 !== null ? l2.next : null;
  }

  // Return the result list (skip the dummy node with value 0)
  return dummyHead.next;
}
