// https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n: number): string[] {
    const ans: string[] = []
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            ans.push("FizzBuzz")
            continue
        } else if(i % 3 === 0){
            ans.push("Fizz")
            continue
        } else if(i % 5 === 0){
            ans.push("Buzz")
            continue
        }
        ans.push(`${i}`)
    }

    return ans
};