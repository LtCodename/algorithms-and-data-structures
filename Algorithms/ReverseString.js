// const reverseString = (str) => {
//     let array = str.split('');
//     array.reverse();
//     return array.join('');
// };

const reverseString = (str) => {
    let array = str.split('');
    let newArray = [];

    for (let i = array.length; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray.join('');
};

console.log(reverseString('fuck you'));
