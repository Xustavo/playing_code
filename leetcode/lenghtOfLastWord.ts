// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
    let newS = s
                .split(" ")
                .filter(word => word !== "");; 
    return newS[newS.length - 1].length;
};