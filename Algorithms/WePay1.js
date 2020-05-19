function arraySum(inputs, tests) {
    // Write your code here
    for (let i = 0; i < inputs.length; i++) {
        let numberToCheck = inputs[i];

        if (i !== inputs.length - 1) {
            for (let j = i + 1; j < inputs.length; j++) {
                let sumToCheck = numberToCheck + inputs[j];
                if (tests.indexOf(sumToCheck) !== -1) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(arraySum([-5,10,3], [5444,666,777,134, -2]));


function movesToSolve(puzzle) {
    // Write your code here
    // Find expected output if puzzle has a solution (it's easy to sort 1d Array that is why we convert puzzle to it)
    let oneDArrayFromInput = [];
    puzzle.forEach(i => {
        oneDArrayFromInput = [...oneDArrayFromInput, ...i];
    });
    oneDArrayFromInput.sort((a,b) => a - b);
    const expectedOutput = [];

    for (let i = 0; i < puzzle.length; i++) {
        const row = [];
        for (let j = 0; j < puzzle[0].length; j++) {
            row[j] = oneDArrayFromInput[j + i * puzzle[0].length];
        }
        expectedOutput.push(row);
    }

    // Now we should implement A*search algorithm to find path from input to needed output
    return pathFinder(puzzle, expectedOutput) || -1;
}

function pathFinder(start, end) {

}

// function to move empty cell to one block left. will receive empty block coordinates as array [x, y] and current Array and will return result of move. Where x is row and y is collumn
function moveLeft(emptyPosition, puzzle) {
    if (emptyPosition[1] > 0) {
        const movedNumber = puzzle[emptyPosition[0]].splice([emptyPosition[1] -1], 1, 0);
        puzzle[emptyPosition[0]][emptyPosition[1]] = movedNumber[0];
    }

    console.log('Moved Left');

    return puzzle;
}

// Same as previous
function moveRight(emptyPosition, puzzle) {
    if (emptyPosition[1] < puzzle[0].length - 1) {
        const movedNumber = puzzle[emptyPosition[0]].splice([emptyPosition[1] + 1], 1, 0);
        puzzle[emptyPosition[0]][emptyPosition[1]] = movedNumber[0];
    }

    console.log('Moved Right');

    return puzzle;
}

console.log([[1,6,3], [8,7,2], [4,0,5]]);
console.log(movesToSolve([[1,6,3], [8,7,2], [4,0,5]]));
//console.log(puzzleGame([[1,5], [4,2], [8,9], [7,3], [6,0]]));