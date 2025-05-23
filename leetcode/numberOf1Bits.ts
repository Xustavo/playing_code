// https://leetcode.com/problems/number-of-1-bits/

function hammingWeight(n: number): number {
    const decimalToBinary = (decimal: number) => {
        if (decimal === 0) {
            return '0';
        }

        let binary = '';
        while (decimal > 0) {
            binary = (decimal % 2) + binary;
            decimal = Math.floor(decimal / 2);
        }
        return binary;
    }

    const binary = decimalToBinary(n);
    let count = 0;

    for(let i = 0; i < binary.length; i++){
        if(binary[i] === '1'){
            count++;
        }
    }

    return count;
};