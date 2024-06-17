/*

1721. Swapping Nodes in a Linked List
Solved
Medium
Topics
Companies
Hint
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]
Example 2:

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 105
0 <= Node.val <= 100


*/

Solution::

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 /*
We can traverse the linked list and store the elements in an array.
Upon conversion to an array, we can swap the required elements by indexing the array.
We can rebuild the linked list using the order of the elements in the array.
Cons: require space like array to collect original list, then swap and new linkedlist to iterate the swapped array an put the elemets back

 */
// var swapNodes = function(head, k) {
//     var temp = head;
//     var tempArr = [];
//     while(temp!=null){
//         tempArr.push(temp.val)
//         temp = temp.next;
//     }
//     console.log(tempArr)
//     //swap 
//     var x = tempArr[k-1];
//     tempArr[k-1] = tempArr[tempArr.length-k];
//     tempArr[tempArr.length-k] = x;
//     console.log(tempArr)
//     var newLL = new ListNode(0)
//     var current = newLL;
//     for(let value of tempArr){
//         current.next = new ListNode(value);
//         current = current.next;
//     }
//     return newLL.next;



// };

// Two pointer approach
// first iterated and collected left position which is at k
// then now inituion is we are starting the loop from k to n
// and right side will start from 1..n-k. as we are by the time ww reach end we are lagging behind by k elements.. which brings us the
//last kth elements from end

var swapNodes = function(head, k) {

      if (!head) {
        return null;
    }
    let left = head, right = head;
    for (let i = 1; i < k; i++) {
        left = left.next;
    }
    //left = 2
  //  1->2->3->4->5
  //k = 2; so swap 2 with 4
    console.log(left)
    console.log(right)
    let curr = left;
    while (curr.next) {
        curr = curr.next; //3,4
        right = right.next; //2,3
    }
    console.log(right)
    let temp = left.val; //2
    left.val = right.val;
    right.val = temp;
    return head;
    
};
