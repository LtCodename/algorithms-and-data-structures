const spiralMatrix = size => {
    let matrix = [];
    const LENGTH = size * size;
    let chunk = [];

    for (let i = 1; i <= LENGTH; i++) {
        chunk.push(i);
        if (chunk.length === size) {
            matrix.push(chunk);
            chunk = [];
        }
    }

    let finalMatrix = [];
    let counter = 1;

    for (let bit of matrix) {
        if (counter % 2 === 0) bit.reverse();
        finalMatrix.push(bit);
        counter++;
    }

    return finalMatrix;
};

console.log(spiralMatrix(10));

const spiral = number => {
    let counter = 1;
    let startRow = 0,
        endRow = number - 1;
    let startColumn = 0,
        endColumn = number - 1;

    const matrix = [];
    for (let i = 0; i < number; i++) matrix.push([]);

    while (startColumn <= endColumn && startRow <= endRow) {
        // Start Row
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // End Column
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // End Row
        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Start Column
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return matrix;
};