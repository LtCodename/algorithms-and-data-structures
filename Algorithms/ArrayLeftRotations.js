function rotLeft(a, d) {

    let array = a;


    for (let i = 0; i < d; i++) {
        let removedArray = array.splice(0, 1);
        let removedElement = removedArray[0];
        array.push(removedElement);
    }
    return array;
}


console.log(rotLeft(54, [1,2,3,4,5]))
