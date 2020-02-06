const twoSum = (arr, sum) => {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        let element = arr[i];

        for (let j = 0; j < arr.length; j++) {
            if (j === index) {
                continue;
            }
            if (element + arr[j] === sum) {
                let prePushed = [element, arr[j]];
                prePushed.sort();
                const prePushedInArray = answer.find(elem => elem[0] === prePushed[0] && elem[1] === prePushed[1]);
                if (!prePushedInArray) {
                    answer.push(prePushed);
                }
            }
        }
    }
    return answer;
};

console.log(twoSum([1,2,2,5,4], 4));

const _twoSum = (array, sum) => {
    const pairs = [];
    const store = [];

    for (let part1 of array) {
        const part2 = sum - part1;
        if (store.indexOf(part2) !== -1) pairs.push([part1, part2]);
        store.push(part1);
    }

    return pairs;
};

console.log(_twoSum([1,2,2,5,4], 4));