// https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/description/

function missingInteger(nums: number[]): number {
    let i = 1;
    while (i < nums.length && nums[i] === nums[i - 1] + 1) {
        i++;
    }

    const sum = nums.slice(0, i).reduce((acc, num) => acc + num, 0);

    let x = sum;
    const numSet = new Set(nums);
    
    while (numSet.has(x)) {
        x++;
    }
    
    return x;
}
