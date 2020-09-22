let bubbleSort = (inputArr) => {
    let length = inputArr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};


console.log(bubbleSort([5,3,1,4,6]));