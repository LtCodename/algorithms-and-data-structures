const calculateFibonacci = number => {
    if (number < 0) throw new Error("Index cannot be negative");
    let array = [];
    let answer = 0;
    if (number === 0) return 0;
    if (number === 1) return 1;
    for (let i = 0; i < number; i++) {
        array.push(i + 1);
    }
    for (let i = array.length; i > array.length - 3; i--) {
        if (i === number) continue;
        answer += i;
    }

    return answer;
};

console.log(calculateFibonacci(-6));

const fibonacci = element =>
    // if (element < 0) throw new Error("Index cannot be negative");
    element < 3 ? 1 : fibonacci(element - 1) + fibonacci(element - 2);

const _fibonacci = element => {
    const series = [1, 1];

    for (let i = 2; i < element; i++) {
        const a = series[i - 1];
        const b = series[i - 2];
        series.push(a + b);
    }

    return series[element - 1];
};