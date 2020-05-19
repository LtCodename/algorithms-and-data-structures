function sockMerchant(n, ar) {
    let hash = {}
    let result = 0;
    ar.forEach((elem) => {
        if (hash[elem]) {
            hash[elem] += 1;
        } else {
            hash[elem] = 1;
        }
    })

    for (let el in hash) {
        if (hash[el] >= 2) {
            if (hash[el] % 2 === 0) {
                result += hash[el] / 2;
            } else {
                for (let i = hash[el]; i > 0; i--) {
                    if (i % 2 === 0) {
                        result += i / 2;
                        break;
                    }
                }
            }
        }
    }

    return Math.floor(result);
}


console.log(sockMerchant(9, [7, 8, 6, 7, 66, 5, 6, 4, 3, 8, 8, 4, 3, 9, 7, 0, 5, 5, 4, 3, 7, 6, 9, 7, 6, 5, 4, 3, 7, 9, 7]));
