function hourglassSum(arr) {
    const sums = [];

    for (let row = 0; row <= 3; row ++) {
        for (let cell = 0; cell <= 3; cell ++) {
            const comboSum =
                arr[row][cell] +
                arr[row][cell + 1] +
                arr[row][cell + 2] +

                arr[row + 1][cell + 1] +

                arr[row + 2][cell] +
                arr[row + 2][cell + 1] +
                arr[row + 2][cell + 2];
            sums.push(comboSum);
        }
    }

    return Math.max(...sums);
}

console.log(hourglassSum(
    [[1, 1, 1, 0, 0, 0,], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0,], [0, 0, 0, 0, 0, 0]])
)


