const findGreatestDivider = numbers => {
    let sorted = numbers.sort((a, b) => a - b);
    let answer = 0;

    for (let i = 1; i <= sorted[0]; i++) {
        if (sorted[0] % i === 0 && sorted[1] % i === 0 && i > answer) answer = i;
    }

    return answer;
};

console.log(findGreatestDivider([169, 69]));