const findArrayMean = arr => {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
};

const findArrayMedian = arr => {
    let sorted = arr.sort((a, b) => a - b);
    if (sorted.length % 2 === 0) {
        let half = sorted.length / 2;
        return (sorted[half] + sorted[half - 1]) / 2;
    } else {
        return sorted[Math.floor(arr.length / 2)];
    }
};

const findArrayMode = arr => {
    let numbersHash = {};
    arr.forEach(numb => {
        if (!numbersHash[numb]) numbersHash[numb] = 0;
        numbersHash[numb]++;
    });

    let values = [];
    values = Object.values(numbersHash);
    let maxEncounter = Math.max(...values);
    let answer = [];

    for (let key in numbersHash) {
        if (numbersHash[key] === maxEncounter) {
            answer.push(key);
        }
    }
    return answer;
};

console.log(findArrayMean([1,2,3,4,5]));

console.log(findArrayMedian([1,2,3,4,5,6,7,8,9,10,11,12]));

console.log(findArrayMode([1,1,1,1,2,3,3,3,4,5,5,5,6,6,6,6,6]));

class Stats {
    constructor(array) {
        this.array = array;
    }

    static round(value, round = 2) {
        return Math.round(value * Math.pow(10, round)) / Math.pow(10, round);
    }

    mean() {
        return this.array.reduce((sum, value) => sum + value, 0) / this.array.length;
    }

    median() {
        const arraySorted = this.array.sort();
        return arraySorted.length % 2 === 0
            ? (arraySorted[arraySorted.length / 2 - 1] +
            arraySorted[arraySorted.length / 2]) /
            2
            : arraySorted[Math.floor(arraySorted.length / 2)];
    }

    mode() {
        const table = {};
        this.array.forEach(value => (table[value] = table[value] + 1 || 1));

        let modes = [];
        let max = 0;
        for (const key in table) {
            const value = parseFloat(key);
            const count = table[key];
            if (count > max) {
                modes = [value];
                max = count;
            } else if (count === max) modes.push(value);
        }

        if (modes.length === Object.keys(table).length) modes = [];

        return modes;
    }
}