// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/

function differenceOfSums(n: number, m: number): number {
    let nums1: number = 0;
    let nums2: number = 0;
    for(let i = 1; i <= n; i++){
        if(i % m === 0){
            nums2 += i;   
        } else {
            nums1 += i;
        }
    }

    return nums1 - nums2;
};