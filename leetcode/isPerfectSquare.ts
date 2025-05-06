// https://leetcode.com/problems/valid-perfect-square/ 

function isPerfectSquare(num: number): boolean {

    // using Newton-Raphson method again
    let precision: number = 0.00001;
    let guess = num;
    let nextGuess = (guess + num/guess)/2;

    while (Math.abs(guess - nextGuess) > precision) {
        guess = nextGuess;
        nextGuess = (guess + num / guess) / 2;
    }
    const rounded = Math.round(nextGuess);
    return rounded * rounded === num;
};