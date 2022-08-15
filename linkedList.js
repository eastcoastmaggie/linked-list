const node = require("./node");

const linkedListProto = {
    append(value) {
        this.size++;
        // Add node to end
        let newNode = node();
        if (this.head == null){
            this.head = newNode;
            this.head.value = value;
        } else{
            newNode.value = value;
            this.tail.nextNode = newNode;
        }
        this.tail = newNode;
  },
    prepend(value) {
        // Add node to begining
        this.size++;
        let newNode = node();
        newNode.value =  value;
        if (this.head == null){
            this.tail = newNode;  
        } else{
            newNode.nextNode = this.head;
        }
        this.head = newNode;
    },
    // size() {
    //     // return total # nodes
    //     if (this.head == null){
    //         return 0;
    //     }
    //     let sizeCount = 0;
    //     let currentNode = this.head;
    //     console.log(this.head);
    //     while (currentNode.nextNode != null){
    //         currentNode = currentNode.nextNode;
    //         sizeCount++;
    //     }
    //     return sizeCount;
    // },
    at(index) {
        // return node at given index
        if (this.head == null){
            return -1;
        }
        let currentNode = this.head;
        for(let i=0; i<index; i++){
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    },
    pop() {
        // remove the last element from list
        if (this.tail == null){
            return null;
        }
        let currentNode = this.head;
        while (currentNode.nextNode != this.tail){
            currentNode = currentNode.nextNode;
        }
        let removedNode = this.tail;
        this.tail = currentNode;
        this.size--;
        return removedNode;

        },
    contains(value) {
        //returns true if value is in list
        let currentNode = this.head;
        while (currentNode.nextNode != null){
            if(currentNode.value == value){
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    },
    find(value) {
        // returns the index of node containing value
        if (this.head == null){
            return -1;
        }
        let currentNode = this.head;
        let index  = 0;
        while (currentNode.nextNode != null){
            if(currentNode.value == value){
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return -1;
    },
    insertAt(value, index){
        newNode = node();
        newNode.value = value;
        if (this.head == null){
            this.head = newNode;
            this.tail = newNode;
        } else if (index >= this.size){ 
            this.tail.nextNode = newNode;
            this.tail = newNode;
        } else {
            let i = 0;
            let currentNode = this.head;
            while (i < index){
                if (index-1 == i){
                    let tempNode = currentNode.nextNode;
                    currentNode.nextNode = newNode;
                    newNode.nextNode = tempNode;
                }
                i++;
                currentNode = currentNode.nextNode;
            }
        }
        this.size++;
        return this;
    },
    removeAt(index){
        if (this.head == null || index >= this.size){
            return null;
        } else {
            let i = 0;
            let currentNode = this.head;
            while (i < index){
                if (index-1 == i){
                    currentNode.nextNode = currentNode.nextNode.nextNode;
                }
                i++;
                currentNode = currentNode.nextNode;
            }
        }
        this.size--;
        return this;
    },
    toString() {
        // returns string representing list  ( value ) -> ( value ) -> ( value ) -> null
        if(this.head == null) {
            return '';
        }
        let currentNode = this.head;
        let nodes  = [];
        while (currentNode.nextNode != null){
            nodes.push(`( ${String(currentNode.value)} )`);
            currentNode = currentNode.nextNode;
        } 
        return nodes.join(' -> ');
    },
};

const linkedList = () => {
    return Object.create(linkedListProto, {
        head : {
            writable: true,
            configurable:true,
            value: null
        },
        tail : {
            writable: true,
            configurable:true,
            value: null
        },
        size : {
            writable: true,
            configurable: true,
            value: 0
        }
    })
};

module.exports = linkedList;
