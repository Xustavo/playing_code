function findEvenNumbers(digits: number[]): number[] {
    const result = new Set<number>();

    const n = digits.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j === i) continue;

            for (let k = 0; k < n; k++) {
                if (k === i || k === j) continue;

                const d1 = digits[i];
                const d2 = digits[j];
                const d3 = digits[k];

                if (d1 === 0) continue;

                if (d3 % 2 !== 0) continue;

                const num = d1 * 100 + d2 * 10 + d3;
                result.add(num);
            }
        }
    }
    return Array.from(result).sort((a, b) => a - b);
}
