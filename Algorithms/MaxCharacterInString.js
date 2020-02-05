const findMaxChar = givenString => {
    let trimmed = givenString.replace(/\s/g, '').toLowerCase();

    let library = {};
    for (let i = 0; i < trimmed.length; i++) {

        if (library[trimmed[i]]) {
            library[trimmed[i]]++;
        } else {
            library[trimmed[i]] = 1;
        }
    }

    let values = [];
    values = Object.values(library);
    const maxValue = Math.max(...values);

    return Object.keys(library).find(key => library[key] === maxValue);
};

console.log(findMaxChar('Hello World'));

const max = string => {
    const characters = {};

    for (let character of string)
        characters[character] = characters[character] + 1 || 1;

    let maxCount = 0;
    let maxCharacter = null;

    for (let character in characters) {
        if (characters[character] > maxCount) {
            maxCount = characters[character];
            maxCharacter = character;
        }
    }

    return maxCharacter;
};

console.log(max('Hello World'));