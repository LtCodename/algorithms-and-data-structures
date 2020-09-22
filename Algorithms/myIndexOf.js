const indexOf = (arr, number) => {
    let elementIndex = -1;
    for (let i = 0; i <= arr.length - 1; i++){
        //console.log(arr[i])
        if (arr[i] === number)
        {
            elementIndex = i;
        }
    }
    return elementIndex;
};

console.log(indexOf([1, 2, 3], 33));
