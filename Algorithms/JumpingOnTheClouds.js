function jumpingOnClouds(c) {
    let jumps = 0;
    let index = 0;
    let finished = false;

    let jump = (jumpTo) => {
        jumps ++;
        index = jumpTo;

        if (index >= c.length - 1) {
            finished = true;
        }
    }

    let checkMove = (cloud) => {
        if (c.length > cloud) {
            if (c[cloud] !== 1) jump(cloud)
            else jump(cloud - 1);
        } else {
            jump(c.length - 1);
        }
    }

    do {
        checkMove(index + 2);
    } while (!finished);

    return jumps;
}


console.log(jumpingOnClouds([0,0,1,0,0,1,0]))
