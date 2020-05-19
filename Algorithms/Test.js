function staircase(n) {
    let answer = '';
    const NEWLINE = '\n';
    const STAIR = '#';
    const BLANK = ' ';

    let spaces = n - 1;
    let stairs = 1;

    for (let i = 1; i <= n; i++) {
        for (let n = 1; n <= stairs; n++) {
            answer += STAIR;
        }
        stairs++;
        for (let j = 1; j <= spaces; j++) {
            answer += BLANK;
        }
        spaces--;

        answer += NEWLINE;
        answer += NEWLINE;
    }
    return answer;
}

console.log(staircase(5));