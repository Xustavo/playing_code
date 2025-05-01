// https://judge.beecrowd.com/en/problems/view/1064

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let count: number = 0;
let sum: number = 0;

for(let i = 0; i < lines.length; i++){
    const value = parseFloat(lines[i]);
    if (value > 0) {
        sum += value;
        count++;
    }
}

let average: number = sum/count;

console.log(`${count} valores positivos`);
console.log(average.toFixed(1));