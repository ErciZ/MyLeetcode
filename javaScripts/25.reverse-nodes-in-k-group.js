/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (head===null){return null;}
    let left=head;
    let right=head;

    for (let i=0;i<k;i++){
        if(right===null){
            return head;
        } 
        right=right.next;
    }
    let newHead=reverse(left,right)
    left.next=reverseKGroup(right,k)
    return newHead;
};

const reverse =(head,last )=>{
    let pre,cur,nxt;
    pre=null;
    cur=head;
    nxt=head;

    while (cur!==last){
        nxt=cur.next;
        cur.next=pre;
        pre=cur;
        cur=nxt;
    }
    return pre;

}
// @lc code=end

