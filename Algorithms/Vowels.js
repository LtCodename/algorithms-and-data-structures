const vowelsArray = ['a', 'e', 'i', 'o', 'u'];

const countVowels = string => {
    let trimmed = string.replace(/\W/g, "").toLowerCase();
    let vowels = 0;
    for (let char of trimmed) {
        if (vowelsArray.indexOf(char) !== -1) {
            vowels++;
        }
    }
    return vowels;
};

console.log(countVowels('Hello There'));

const vowels = string => {
    let count = 0;
    const choices = "aeiou"; // or ['a', 'e', 'i', 'o', 'u']

    for (let character of string.toLowerCase())
        if (choices.includes(character)) count++;

    return count;
};

const _vowels = string => {
    let matches = string.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
};

_vowels('hello there');