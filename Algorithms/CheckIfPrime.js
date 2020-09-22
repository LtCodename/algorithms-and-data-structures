

isPrime = (number) => {
    if (number < 2) {
        return false;
    }

    let primeCounter = 0;

    for (let i = 1; i < number + 1 ; i++)  {
        //console.log(i)
        //console.log(number % i)
        if (number % i === 0) {
            primeCounter ++;
        }
    }

    return primeCounter === 2;
}

console.log(isPrime(11))
