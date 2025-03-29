class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    push(value) {
        const newNode = new Node(value);
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined;

        let temp = this.head;
        let pre = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
        // scenario where the LinkedList is empty
        // if (!this.head) {
        //     return undefined;
        // } else if (this.length === 1) {
        //     const removedItem = this.head;
        //     this.head = null;
        //     this.tail = null;
        //     return removedItem;
        // } else {
        //     const lastItem = this.tail;
        //     this.tail = pre;
        //     this.tail.next = temp;
        //     return lastItem;
        // }
    }

    findMiddleNode() {
        if (!this.head) return null;
        if (this.length === 1) {
            console.log('condition for one is fulfilled')
            console.log('this.head', this.head);
            return this.head;
        }
        let length = this.length;
        let counter = 1;
        let midNode;
        let isLengthEven;
        if (length % 2 === 1) {
            isLengthEven = false;
            midNode = ((length - 1) / 2) + 1;
        } else {
            isLengthEven = true;
            midNode = (length / 2) + 1;
        }

        let temp = this.head;
        let pre = this.head;

        while (this.head && counter < length) {
            console.log('counter', counter);
            pre = temp;
            temp = temp.next;
            if (counter === midNode) {
                console.log('mid here true')
                return pre;
            }
            counter++;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

console.log("Original list:");
myLinkedList.printList();

const middleNode = myLinkedList.findMiddleNode();
console.log(`\nMiddle node value: ${middleNode.value}`);

