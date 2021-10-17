const { divider, pm } = require('../../__common/utils.js');

// Approach 1: Recursion
const fib_recursion = x => {
    pm.vars('x', x);
    if (x <= 1) {
        pm.hit('hit!'); divider();
        return 1;
    }
    return fib_recursion(x - 1) + fib_recursion(x - 2);
}

// Approach 2: Memoization
const fib_memo = (x, memo = {}) => {
    pm.vars('x', x, 'memo', memo);
    if (x <= 1) {
        pm.hit('hit!'); divider();
        return 1;
    }
    if (memo[x]) return memo[x];

    memo[x] = fib_memo(x - 1, memo) + fib_memo(x - 2, memo)

    return memo[x]
}

// Approach 3: Dynamic Programming
const fib_dp = x => {
    if (x < 0) return 0;
    let dp = new Array(x);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    if (x <= 2) return dp[x];

    for (let i = 3; i <= x; i++)
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[x];
}

// Approach 4: Iterative
const fib_iter = x => {
    if (x <= 0) return 0;
    let dp = [1, 2];
    if (x <= 2) return dp[x - 1];

    for (let i = 3; i <= x; i++) 
        [dp[0], dp[1]] = [dp[1], dp[0] + dp[1]];
    
    return dp[1];
}

let x = 5
// console.log(fib_recursion(x));
// console.log(fib_memo(x));
// console.log(fib_dp(x));
// console.log(fib_iter(x));