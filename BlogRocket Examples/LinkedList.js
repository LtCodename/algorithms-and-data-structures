const myLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 37,
                next: null
            }
        }
    }
};

class LinkedList {
    constructor(value) {
        this.head = {value, next: null};
        this.tail = this.head
    }

    // insert will add to the end of our linked list
    insert(value) {
        /* create the node */
        const node = {value, next: null};
        /* set the next property of the tail = to the new node */
        this.tail.next = node;
        /* the new node is now the tail */
        this.tail = node;
    }

    removeNode(val) {
        /* begin at the head */
        let currentNode = this.head;
        /* we need to hold reference to the previous node */
        let previousNode;
        /* while we have a node i.e. not passed the tail */
        while(currentNode) {
            /* if we find our value then break out */
            if (currentNode.value === val) {
                break;
            }
            /* with no value found currentNode we set this to previousNode */
            previousNode = currentNode;
            /* we get the next node and assign it to currentNode  */
            currentNode = currentNode.next
        }
        /* we return undefined as we have found no node with that value  */
        if (currentNode === null) {
            return false;
        }

        // if the node is the head then we set our head to the next value
        // of the head node
        if (currentNode === this.head) {
            this.head = this.head.next;
            return;
        }
        /* so we remove our node by setting the node before it to the node in front of it */
        previousNode.next = currentNode.next
    }

    removeTail() {
        let currentNode = this.head;
        let previousNode;
        while (currentNode) {
            /* the tail is the only node without a `next` value, so if no next value is present, then this must be our tail */
            if (!currentNode.next) {
                break;
            }
            // get a reference to our previous node
            previousNode = currentNode;
            // move onto the next node
            currentNode = currentNode.next;
        }
        // to remove the tail, we set the previousNode.next to null
        previousNode.next = null;
    }
}