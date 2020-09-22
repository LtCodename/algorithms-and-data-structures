
findFactorial = (number) => {
    if (number === 0) {
        return 1;
    }

    let answer = 1;
    for (let i = 1; i <= number; i++) {
        answer *= i;
    }

    return answer;
}




console.log(findFactorial(6));
