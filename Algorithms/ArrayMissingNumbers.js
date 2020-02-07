const findMissingNumberInArray = array => {
    let answer = [];
    let index = array.length + 1;

    for (let i = 1; i <= index; i++) {
        if (array.indexOf(i) === -1) answer.push(i);
    }

    return answer;
};

console.log(findMissingNumberInArray([1,2,3,4,5,6,8,9,10]));
