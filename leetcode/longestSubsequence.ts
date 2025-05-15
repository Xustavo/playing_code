function getLongestSubsequence(words: string[], groups: number[]): string[] {
    let res: string[] = []
    for(let i = 0; i < groups.length; i++){
        if(groups[i] !== groups[i+1] && !res.includes(words[i]))
            res.push(words[i])
    }

    return res
};