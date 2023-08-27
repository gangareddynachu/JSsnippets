/*

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 

Example 1:


Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 
Example 2:


Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.
Example 3:


Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.

*/



Java 
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteMiddle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        ListNode temp = new ListNode();
        temp.next = head;
        if(fast.next == null){
            return null;
        }
       /*
  1->2->3->4->5
  temp = 0->1->2->3->4->5
  when fast reaches end
  then fast is at 5 slow is at 3 and temp is at 2

  Now connect temp next to slow next (2--->4)

       */
        while(fast!=null && fast.next!=null){
            temp=temp.next;
            slow=slow.next;
            fast=fast.next.next;
        }

        temp.next = slow.next;
        return head;
        
    }
}


Javascript Brute Force:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
   
/*
Brute Force
Get the count find the middle
traverse again from start  and decrement the middle
if middle reaches zero then point that node next to node next.next i.e skip the immediate next one
For all other just traverse to next one
*/
    let count = 0;
    let temp1 = head;
    let temp2 = head;
    while(temp1 !=null){
        count++;
        temp1 = temp1.next;
    }
    let middle = parseInt(count/2);
    console.log(middle)
    if(middle==0){
        temp2 = null;
        return temp2
    }
    middle--;
    while(temp2?.next!=null){
        if(middle===0){
            temp2.next = temp2.next?.next;
        }
        temp2 = temp2.next;
        middle--; 

    }

    return head;

};
