const removeDuplicates = array => {
    let noDuplicates = [];

    for (let elem of array) {
        if (noDuplicates.indexOf(elem) === -1) noDuplicates.push(elem);
    }

    return noDuplicates;
};


console.log(removeDuplicates([1,2,3,3,4,5,5,1,7,4,5,65,2,36,8,5,7,3]));