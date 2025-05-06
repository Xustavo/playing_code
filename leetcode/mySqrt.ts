// https://leetcode.com/problems/sqrtx/

function mySqrt(x: number): number {
    if(x === 0) return 0;

    // using Newton-Raphson method
    let precision: number = 0.00001;
    let guess = x;
    let nextGuess = (guess + x/guess)/2;

    while (Math.abs(guess - nextGuess) > precision) {
        guess = nextGuess;
        nextGuess = (guess + x / guess) / 2;
    }

    return ~~nextGuess;
};