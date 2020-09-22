function twoStrings(s1, s2) {
    let allSymbols = {};
    let answer = "NO";

    function fillTheHash(symbol) {
        if (allSymbols[symbol]) {
            allSymbols[symbol] += 1;
        } else {
            allSymbols[symbol] = 1;
        }
    }

    for (let i = 0; i < s1.length; i++) {
        fillTheHash(s1[i]);
    }
    for (let j = 0; j < s2.length; j++) {
        fillTheHash(s2[j]);
    }

    for (let elem in allSymbols) {
        if (allSymbols[elem] > 1) {
            answer = "YES";
        }
    }

    return answer;
}

console.log(twoStrings('mister', 'anus'));
