function isValid(s: string): boolean {
    const brackets: string[] = [];
    const pairs: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            brackets.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (brackets.length === 0 || brackets[brackets.length - 1] !== pairs[char]) {
                return false;
            }
            brackets.pop();
        }
    }

    return brackets.length === 0;
}
