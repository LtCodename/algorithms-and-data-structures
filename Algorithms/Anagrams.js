const isAnagram = (string1, string2) => {
    let trimmedOne = string1.replace(/\s/g, '').toLowerCase();
    let trimmedTwo = string2.replace(/\s/g, '').toLowerCase();

    let libraryOne = {};
    for (let i = 0; i < trimmedOne.length; i++) {

        if (libraryOne[trimmedOne[i]]) {
            libraryOne[trimmedOne[i]]++;
        } else {
            libraryOne[trimmedOne[i]] = 1;
        }
    }

    let libraryTwo = {};
    for (let i = 0; i < trimmedTwo.length; i++) {

        if (libraryTwo[trimmedTwo[i]]) {
            libraryTwo[trimmedTwo[i]]++;
        } else {
            libraryTwo[trimmedTwo[i]] = 1;
        }
    }

    function isEquivalent(a, b) {
        // Create arrays of property names
        let aProps = Object.getOwnPropertyNames(a);
        let bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different, objects are not equivalent
        if (aProps.length !== bProps.length) {
            return false;
        }

        for (let i = 0; i < aProps.length; i++) {
            let propName = aProps[i];

            // If values of same property are not equal, objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }

    return isEquivalent(libraryOne, libraryTwo);
};

console.log(isAnagram('hello world', 'hello world'));

const charCount = string => {
    const table = {};

    for (let char of string.replace(/\W/g, "").toLowerCase())
        table[char] = table[char] + 1 || 1;

    return table;
};

const anagrams = (stringA, stringB) => {
    const charCountA = charCount(stringA);
    const charCountB = charCount(stringB);

    console.log(charCountA);
    console.log(charCountB);

    if (Object.keys(charCountA).length !== Object.keys(charCountB).length)
        return false;

    for (let char in charCountA)
        if (charCountA[char] !== charCountB[char]) return false;

    return true;
};

const _sort = string => string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
const _anagrams = (stringA, stringB) => _sort(stringA) === _sort(stringB);