class Tree {
    constructor(value) {
        this.root = null
    }

    add(value) {
        // if we do not have a root, then we create one
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }

        let current = this.root;
        // keep looping
        while (true) {
            // go left if our current value is greater
            // than the value passed in
            if (current.value > value) {
                // if there is a left child then run the
                // loop again
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = new Node(value);
                    return;
                }
            }
            // the value is smaller, so we go right
            else {
                // go right
                // if there is a left child then run the
                // loop again
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = new Node(value);
                    return;
                }
            }
        }
    }

    contains(value) {
        // get the root
        let current = this.root;
        // while we have a node
        while (current) {
            // check if our current node has the value
            if (value === current.value) {
                return true; // leave the function
            }
            // we decide on the next current node by comparing our value
            // against current.value - if its less go left else right
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }
}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}