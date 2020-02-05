const reverseInt = int => {
    return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);
};

console.log(reverseInt(-3000));