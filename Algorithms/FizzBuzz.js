const fizzBuzz = number => {
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log('Fizz Buzz');
        } else if (i % 2 === 0) {
            console.log('Fizz');
        } else if (i % 3 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
};

fizzBuzz(13);

const _fizzBuzz = number => {
    let output = [];
    for (let i = 1; i <= number; i++) {
        if (i % 6 === 0) output.push("Fizz Buzz");
        else if (i % 2 === 0) output.push("Fizz");
        else if (i % 3 === 0) output.push("Buzz");
        else output.push(i);
    }
    return output;
};

console.log(_fizzBuzz(13));