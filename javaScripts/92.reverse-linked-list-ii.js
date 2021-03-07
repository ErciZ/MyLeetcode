/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left===1){
        return reverseFirstN(head,right)
    }
    head.next=reverseBetween(head.next,left-1,right-1)
    return  head
    
};

let successor = null;
const reverseFirstN =(head,n)=>{
    if (n===1){
        successor=head.next;
        return  head;
    }
    let last = reverseFirstN(head.next,n-1)


    head.next.next=head;
    head.next=successor;
    return last

}
// @lc code=end

