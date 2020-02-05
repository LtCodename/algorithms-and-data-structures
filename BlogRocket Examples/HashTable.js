class HashTable {
    constructor(size) {
        // define the size of our hash table, which will be used in our hashing function
        this.size = size;
        this.storage = [];
    }

    insert(key, value) {
        // will give us an index in the array
        const index = this.myHashingFunction(key, this.size);
        // handle collision - hash function returns the same
        // index for a different key - in complicated hash functions it is very unlkely
        // that a collision would occur
        if (!this.storage[index]) {
            this.storage[index] = [];
        }
        // push our new key value pair
        this.storage[index].push([key, value]);
    }

    get(key) {
        const index = this.myHashingFunction(key, this.size);
        let arrayAtIndex = this.storage[index];
        if (arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++) {
                const pair = arrayAtIndex[i];
                if (pair[0] === key) {
                    // return the value
                    return pair[1];
                }
            }
        }
    }

    remove(key) {
        // first we get the index of our key
        // remember, the hashing function will always return the same index for the same
        // key
        const index = this.myHashingFunction(key, this.size);
        // remember we could have more than one array at an index (unlikely)
        let arrayAtIndex = this.storage[index];
        if (arrayAtIndex) {
            // let's loop over all the arrays at that index
            for (let i = 0; i < arrayAtIndex.length; i++) {
                // get the pair (a, 1)
                let pair = arrayAtIndex[i];
                // check if the key matches the key param
                if (pair[0] === key) {
                    // delete the array at index
                    delete arrayAtIndex[i];
                    // job done, so break out of the loop
                    break;
                }
            }
        }
    }

    // this is how we will hash our keys
    myHashingFunction(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i) * 3;
        }
        return sum % n;
    }
}