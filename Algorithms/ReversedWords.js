const reverseWords = phrase => {
    let wordsArray = phrase.split(' ');
    let answer = [];
    for (let word of wordsArray) {
        let strToArr = word.split('');
        answer.push(strToArr.reverse().join(''));
    }
    return answer.join(' ');
};

console.log(reverseWords('I love my beautiful wife'));

const __reverseWords = string => {
    const wordsReversed = [];

    string.split(" ").forEach(word => {
        let wordReversed = "";
        for (let i = word.length - 1; i >= 0; i--) wordReversed += word[i];
        wordsReversed.push(wordReversed);
    });

    return wordsReversed.join(" ");
};

const _reverseWords = string =>
    string
        .split(" ")
        .map(word =>
            word
                .split("")
                .reverse()
                .join("")
        )
        .join(" ");