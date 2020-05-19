function repeatedString(s, n) {
    let aInS = 0;

    let stringToArray = s.split('');

    stringToArray.forEach((elem) => {
        if (elem === 'a') {
            aInS += 1;
        }
    })

    const lengthOfLastPart = n % s.length;
    const chunks = (n - lengthOfLastPart) / s.length;

    const lastPart = stringToArray.slice(0, lengthOfLastPart);

    let restOfAs = 0;

    lastPart.forEach((elem) => {
        if (elem === 'a') {
            restOfAs += 1;
        }
    })

    return aInS * chunks + restOfAs;
}

console.log(repeatedString('aba', 10))
