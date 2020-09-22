/*
const isPalindrome = string => {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    const stringCharacters = string
        .toLowerCase()
        .split("")
        .reduce(
            (characters, character) =>
                validCharacters.indexOf(character) > -1 ? characters.concat(character) : characters, []
        );
    return stringCharacters.join("") === stringCharacters.reverse().join("");
};

const _isPalindrome = string =>
    string
        .split("")
        .every((character, index) => character === string[string.length - 1 - index]);

const __isPalindrome = string => {
    const cleaned = string.replace(/\W/g, "").toLowerCase();

    return (
        cleaned ===
        cleaned
            .split("")
            .reverse()
            .join("")
    );
};

console.log(isPalindrome('mariia'));
console.log(_isPalindrome('qw'));
console.log(__isPalindrome('maRiIa'));*/



//
// fb = (nth) => {
//
//     let array = [0,1]
//     //return array[nth] if nth < 2
//
//
//     let count = 2;
//
//
//     do {
//         array.push(array[count - 2] + array[count - 1]);
//         count ++;
//     } while (count <= nth)
//
//     return array[nth];
// }
//
//
// console.log(fb(10))



reduce = (array, callback, startValue) => {
    let result = startValue;

    for (let i = 0; i < array.length; i++) {
        //console.log(array[i])
        //console.log(result)
        result = callback(result, array[i]);
    }

    return result;


}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))



