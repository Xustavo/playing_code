// https://leetcode.com/problems/set-matrix-zeroes/

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let positionM = new Set<number>();
    let positionN = new Set<number>();
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                positionM.add(i);
                positionN.add(j);
            }
        }
    }

    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(positionM.has(i) || positionN.has(j)){
                matrix[i][j] = 0;
            }
        }
    }


};