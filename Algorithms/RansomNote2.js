function checkMagazine(magazine, note) {
    let availableWords = {};
    let weCanComposeNote = "Yes"

    for(let i = 0; i < magazine.length; i++) {
        availableWords[magazine[i]] = magazine[i];
    }

    for(let j = 0; j < note.length; j++) {
        if (!availableWords[note[j]]) {
            weCanComposeNote = "No";
        }
    }

    return weCanComposeNote;

    /*let weCanComposeNote = "Yes";

    for(let i = 0; i < note.length; i++) {
        //console.log(note[i]);
        if (magazine.indexOf(note[i]) === -1) {
            weCanComposeNote = "No";
        }
    }
    return weCanComposeNote;*/
}

console.log(checkMagazine(['I', 'am', 'a', 'totally', 'stupid', 'person'],
    ['I', 'am', 'stupid']));
