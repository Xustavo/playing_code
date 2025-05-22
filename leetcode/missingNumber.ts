// https://leetcode.com/problems/missing-number/

function missingNumber(nums: number[]): number {
    let setOfNums = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!setOfNums.has(i)) {
            return i;
        }
    }
    return -1;
}