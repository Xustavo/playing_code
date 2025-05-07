// https://judge.beecrowd.com/en/problems/view/1068

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

for (const line of lines) {
    let stack: string[] = [];
    let isCorrect = true;

    for (const char of line) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                isCorrect = false;
                break;
            }
            stack.pop();
        }
    }

    if (isCorrect && stack.length === 0) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}
