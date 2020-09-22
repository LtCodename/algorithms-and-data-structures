const findPrimes = number => {
    let primes = [];

    for (let i = 0; i < number - 1; i++) {
        //console.log(i)
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    function isPrime(checked) {
        let divisor = 2;

        while (checked > divisor) {
            if (checked % divisor === 0) {
                return false;
            }
            else
                divisor++;
        }
        return true;
    }

    return primes;
};

console.log(findPrimes(15));

// const primes = number => {
//     const numbers = new Array(number + 1);
//     console.log(numbers);
//     numbers.fill(true);
//     console.log(numbers);
//     numbers[0] = numbers[1] = false;
//     console.log(numbers);
//
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         for (let j = 2; i * j <= number; j++) numbers[i * j] = false;
//     }
//
//     return numbers.reduce(
//         (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
//         []
//     );
// };

//console.log(primes(10));
