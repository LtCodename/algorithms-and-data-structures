const countZero = n => {
    let count = 0;
    while (n > 1) {
        count += Math.floor(n / 10);
        n = n / 10;
    }
    return count;
};

countZero(2014);