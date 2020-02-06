const capitalizePhrase = phrase => {
    let wordsArray = phrase.split(' ');
    let answer = [];
    for (let word of wordsArray) {
        let capitalizedWord = [];
        for (let i = 0; i <= word.length; i++) {
            let letter = '';
            if (i === 0) {
                letter = word[i].toUpperCase();
            } else {
                letter = word[i];
            }
            capitalizedWord.push(letter);
        }
        answer.push(capitalizedWord.join(''));
    }
    return answer.join(' ');

};

console.log(capitalizePhrase('i enjoy playing warcraft 3 reforged campaign'));

const capitalize = phrase => {
    const words = [];

    for (let word of phrase.split(" "))
        words.push(word[0].toUpperCase() + word.slice(1));

    return words.join(" ");
};

const _capitalize = phrase => {
    let title = phrase[0].toUpperCase();

    for (let i = 1; i < phrase.length; i++)
        title += phrase[i - 1] === " " ? phrase[i].toUpperCase() : phrase[i];

    return title;
};