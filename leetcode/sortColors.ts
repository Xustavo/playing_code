// https://leetcode.com/problems/sort-colors/

function sortColors(nums: number[]): void {
    function compare(a: number, b: number): number {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (compare(nums[j], nums[j + 1]) > 0) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
}