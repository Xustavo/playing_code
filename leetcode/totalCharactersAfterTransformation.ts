// https://leetcode.com/problems/total-characters-in-string-after-transformations-i/description/

function lengthAfterTransformations(s: string, t: number): number {
    const MOD = 1_000_000_007;

    const dp = Array.from({ length: 26 }, () => new Array(t + 1).fill(0));

    for (let i = 0; i < 26; i++) {
        dp[i][0] = 1;
    }

    for (let k = 1; k <= t; k++) {
        for (let i = 0; i < 26; i++) {
            if (i === 25) {
                dp[i][k] = (dp[0][k - 1] + dp[1][k - 1]) % MOD;
            } else {
                dp[i][k] = dp[i + 1][k - 1];
            }
        }
    }

    let total = 0;
    for (const c of s) {
        const idx = c.charCodeAt(0) - 97; 
        total = (total + dp[idx][t]) % MOD;
    }

    return total;
}
