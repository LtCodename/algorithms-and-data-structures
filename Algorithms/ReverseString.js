const reverseString = (str) => {
    let array = str.split('');
    array.reverse();
    return array.join('');
};

console.log(reverseString('hello'));