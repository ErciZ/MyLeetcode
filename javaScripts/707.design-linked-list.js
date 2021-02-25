/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
function Node(data){
    this.data=data;
    this.next=null;
}

var MyLinkedList = function() {
    this._length=0;
    this.head=null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let currentNode=this.head;
    let count=0;

    while(count<index){
        currentNode=currentNode.next;
        count++
    }
    if(currentNode){
        return currentNode.data
    }else{
        return -1
    }
};

MyLinkedList.prototype.getNode = function(index) {
    let currentNode=this.head;
    let count=0;

    while(count<index){
        currentNode=currentNode.next;
        count++
    }
    return currentNode
   
};
/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node=new Node(val);
    node.next=this.head;
    this.head=node;
    this._length++;
    return
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node=new Node(val);
    let currentNode=this.head;
    if (this._length===0){
        node.next=this.head;
        this.head=node;

    }else{
        currentNode=this.getNode(this._length-1)
        currentNode.next=node;
    }
    this._length++;
    return node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const node=new Node(val);
    if(index>this._length||index<0){
       return
    }

    if(index===0){
        node.next=this.head;
        this.head=node;
        return
    }
    let previousNode =this.getNode(index-1)
    node.next=previousNode.next ;
    previousNode.next=node;
    this._length++;
    return 
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index>=this._length||index<0){
       return 
    }
    let currentNode=this.head;
    if(index===0){
        this.head=currentNode.next;
        return
    }

    let previousNode=this.getNode(index-1);
    if(index===this._length-1){
        previousNode.next=null;
        this._length--;
        return
    }
    currentNode=previousNode.next;
    previousNode.next=currentNode.next;
    this._length--;
    return ;
};


/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

//  var obj = new MyLinkedList()
// //  obj.addAtHead(val)
//  obj.addAtTail(1)
//  obj.print()
// //  obj.addAtIndex(index,val)
//  obj.deleteAtIndex(0)
//  obj.print()