const reverseArray = arr => arr.reverse();

const _reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    return reversed;
};

console.log(reverseArray([1,2,3,4,5]));
console.log(_reverseArray([1,2,3,4,5]));

const __reverseArray = array => {
    for (let i = 0; i < array.length / 2; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
};

const ___reverseArray = array => {
    for (let i = 0; i < array.length / 2; i++) {
        [array[i], array[array.length - 1 - i]] = [
            array[array.length - 1 - i],
            array[i]
        ];
    }
    return array;
};