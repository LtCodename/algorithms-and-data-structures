const printPyramid = levels => {
    let pyramid = '';
    //const width = 2 * levels - 1;
    let spaces = (levels - 1) * 2;
    const RETURN = '\n';
    const GAP = ' ';
    const BLOCK = '#';

    for (let i = 1; i <= levels; i++) {
        let spaceHalf = spaces / 2;

        for (let y = 1; y <= spaceHalf; y++) {
            pyramid += GAP;
        }

        for (let e = 1; e <= i; e++) {
            pyramid += BLOCK;
            if (e !== 1) {
                pyramid += BLOCK;
            }
        }

        for (let v = 1; v <= spaceHalf; v++) {
            pyramid += GAP;
        }

        pyramid += RETURN;
        spaces -= 2;
    }
    return pyramid;
};

console.log(printPyramid(8));

const pyramid = number => {
    let levels = "";
    const midpoint = Math.floor((2 * number - 1) / 2);

    for (let row = 0; row < number; row++) {
        let level = "";
        for (let column = 0; column < 2 * number - 1; column++)
            level += midpoint - row <= column && column <= midpoint + row ? "#" : " ";
        levels += level + "\n";
    }

    return levels;
};

const _pyramid = (number, row = 0, level = "", levels = "") => {
    if (number === row) return levels;

    if (2 * number - 1 === level.length)
        return _pyramid(number, row + 1, "", levels + level + "\n");

    const midpoint = Math.floor((2 * number - 1) / 2);
    return _pyramid(
        number,
        row,
        level +
        (midpoint - row <= level.length && level.length <= midpoint + row
            ? "#"
            : " "),
        levels
    );
};