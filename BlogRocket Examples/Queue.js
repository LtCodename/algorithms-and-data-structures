class Queue {
    constructor() {
        // similar to above we have an object for our data structure
        // and we also have a variable to keep track of the length
        this.queue = {};
        this.length = 0;
        // this is a new variable which tracks the head
        this.head = 0
    }

    enqueue(value) {
        // add a key of our length + head to our object with the value param
        this.queue[this.length + this.head] = value;
        this.length++
    }

    dequeue() {
        // get a reference to our first val so we can return it
        const firstVal = this.queue[this.head];
        // now delete this from our queue
        delete this.queue[this.head];
        // decrement our length
        this.length--;
        // finally increment our head to be the next node
        this.head++;
    }

    peek() {
        // simply return the value at our head
        return this.queue[this.head];
    }
}

console.log('%cQueue', 'background: #222; color: #bada55');
let queue = new Queue();
console.log(queue.peek());
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());