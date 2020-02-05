class Stack {
    constructor() {
        // create our stack, which is an empty object
        this._storage = {};
        this._length = 0; // this is our length
    }
    // this method will push a value onto the top of our stack
    push(value) {
        // so add the value to the top of our stack
        this._storage[this._length] = value;
        // since we added a value we should also increase the length by 1
        this._length++;
    }

    // this method is responsible for popping off the last value and returning it
    pop() {
        // we first get the last val so we have it to return
        const lastVal = this._storage[this._length - 1];
        // now remove the item which is the length - 1
        delete this._storage[this._length - 1];
        // decrement the length
        this._length--;
        // now return the last value
        return lastVal
    }

    // this will peek at the last value added to the stack
    peek() {
        return this._storage[this._length - 1];
    }
}

console.log('%cStack', 'background: #222; color: #bada55');
let stack = new Stack();
console.log(stack.peek());
stack.push(4);
stack.push(6);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());