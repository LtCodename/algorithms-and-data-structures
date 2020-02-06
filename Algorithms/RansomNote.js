const magazine =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
    "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
    "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
    "mollit anim id est laborum";

const ransomNote = (note, text) => {
    let noteArr = note.split(' ');
    let textArr = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').split(' ');

    for (let word of noteArr) {
        if (textArr.indexOf(word) === -1) return false
    }

    return true;
};

console.log(ransomNote('incididunt ut et pariatur yevhen', magazine));

const _ransomNote = (note, magazine) => {
    const magazineWords = magazine.split(" ");
    const magazineHash = {};

    magazineWords.forEach(word => {
        if (!magazineHash[word]) magazineHash[word] = 0;
        magazineHash[word]++;
    });

    const noteWords = note.split(" ");
    let possible = true;

    noteWords.forEach(word => {
        if (magazineHash[word]) {
            magazineHash[word]--;
            if (magazineHash[word] < 0) possible = false;
        } else possible = false;
    });

    return possible;
};