function minimumOperations(nums: number[]): number {
    let operations = 0;
    let i = 0;

    while (i < nums.length) {
        const seen = new Set<number>();

        let j = i;
        while (j < nums.length && !seen.has(nums[j])) {
            seen.add(nums[j]);
            j++;
        }

        if (j < nums.length) {
            operations += 1;
            i = i + 3; 
        } else {
            break;
        }
    }

    return operations;
}
