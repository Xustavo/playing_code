// https://leetcode.com/problems/build-array-from-permutation/

function buildArray(nums: number[]): number[] {
    let ans: number[] = [];

    for(let i = 0; i < nums.length; i++){
        ans[i] = nums[nums[i]];
    }

    return ans;
};