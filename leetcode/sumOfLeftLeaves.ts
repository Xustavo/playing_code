// https://leetcode.com/problems/sum-of-left-leaves

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function sumOfLeftLeaves(root: TreeNode | null): number {
    if(root === null) return 0;
    let counter: number = 0;

    if(root.left !== null){

        if(root.left.left === null && root.left.right === null){
            counter += root.left.val;
        } else {
            counter += sumOfLeftLeaves(root.left);
        }
    }

    counter += sumOfLeftLeaves(root.right);

    return counter;
};