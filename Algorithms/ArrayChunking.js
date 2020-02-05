const chunkThisBaby = (array, size) => {
    let glass = [];
    let answer = [];
    for (let elem of array) {
        // Take 1
        /*if (glass.length !== size) {
            glass.push(elem);
            if (elem === array[array.length - 1]) {
                answer.push(glass);
            }
        } else {
            answer.push(glass);
            glass = [];
            glass.push(elem);
            if (elem === array[array.length - 1]) {
                answer.push(glass);
            }
        }*/

        //Take 2
        /*glass.push(elem);
        if (glass.length === size) {
            answer.push(glass);
            glass = [];
        }
        if (elem === array[array.length - 1]) {
            answer.push(glass);
        }*/

        //Take 3
        glass.push(elem);
        if (glass.length === size || elem === array[array.length - 1]) {
            answer.push(glass);
            glass = [];
        }
    }
    return answer;
};

const chunk = (array, size) => {
    const chunks = [];

    for (let item of array) {
        const lastChunk = chunks[chunks.length - 1];
        if (!lastChunk || lastChunk.length === size) chunks.push([item]);
        else lastChunk.push(item);
    }

    return chunks;
};

const _chunk = (array, size) => {
    const chunks = [];
    let index = 0;

    while (index < array.length) {
        chunks.push(array.slice(index, index + size));
        index += size;
    }

    return chunks;
};

const __chunk = (array, size) => {
    const chunks = [];

    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }

    return chunks;
};

console.log(chunkThisBaby([1,2,3,4,5,6,7,8,9,10], 3));