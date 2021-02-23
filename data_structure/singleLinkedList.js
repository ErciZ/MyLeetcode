

class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class singleLinkedList{
    constructor(){
        this._length=0;
        this.head=null;
    }

    getNodeAt(position){
        let currentNode=this.head;
        let length=this._length;
        let count=0;

        // 1st use-case: an invalid position
        if(position<0 ||position>=length|| length===0){
            throw new Error('non-existent node in this list');
        }

        // 2nd use-case: a valid position
        while(count<position){
            currentNode=currentNode.next;
            count++
        }

        return currentNode;
    }

    push=(value)=>{
        const node=new Node(value);
        let currentNode=this.head;
        // 1st use-case: an empty list
        if(!currentNode){
            this.head=node;
            this._length++;
            return node;
        }

        //2st use-case: a non-empty list
        currentNode=this.getNodeAt(this._length-1)
        currentNode.next=node;
        this._length++;
        return node;
    }

    insertAt(position,value){
        const node=new Node(value);
        if(position>this._length||position<0){
            throw new Error('out of range')
        }

        if(position===0){
            node.next=this.head;
            this.head=node;
            return
        }
        let previousNode =this.getNodeAt(position-1)
        node.next=previousNode.next ;
        previousNode.next=node;
        this._length++;
        return 
    }

    removeAt(position){
        if(position>this._length||position<0){
            throw new Error('out of range');
        }


        let currentNode=this.head;
        if(position===0){
            this.head=currentNode.next;
            return
        }
        let previousNode=this.getNodeAt(position-1);
        currentNode=previousNode.next;
        previousNode.next=currentNode.next;
        this._length--;
        return ;
    }

    indexOf(value){
        let currentNode=this.head;

        for(let i=0;i<this._length;i++){
            if(currentNode.data===value){
                return i;
            }
            currentNode=currentNode.next;
        }
        return -1;
    }

    remove(value){
        let index=this.indexOf(value)
        return this.removeAt(index)
    }

    isEmpty(){
        return this._length===0;
    }

    length(){
        return this._length;
    }

    getHead(){
        return this.head;
    }

    clear(){
        this._length=0;
        this.head=null;
    }

     
    toString () {
        let current = this.head;
        let s = '';
     
        while (current) {
            let next = current.next;
            next = next ? next.data : 'null';
            s += `[data: ${current.data}, next: ${next}] `;
            current = current.next;
        }
     
         return s;
    }

}



// const test=new singleLinkedList();

// test.push(1);
// test.push(2);
// test.push(3);
// test.push(4);
// test.push(5);
// console.log(test.toString())
// test.insertAt(3,6)
// console.log(test.toString())
// test.remove(2)
// console.log(test.toString())
// test.removeAt(2)
// console.log(test.toString())