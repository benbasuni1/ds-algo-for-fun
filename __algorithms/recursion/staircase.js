const { divider, pm } = require('../../__common/utils.js');

const staircase_recursion = x => {
    pm.vars('x', x);
    if (x === 0) {
        pm.hit('hit!'); divider();
        return 0;
    }
    if (x === 1) {
        pm.hit('hit!'); divider();
        return 1;
    }
    if (x === 2) {
        pm.hit('hit!'); divider();
        return 2;
    }

    return staircase_recursion(x - 1) + staircase_recursion(x - 2);
}

const staircase_memo = (x, memo = {}) => {
    pm.vars('x', x, 'memo', memo);
    if (x === 0) {
        pm.hit('hit!'); divider();
        return 0;
    } 
    if (x === 1) {
        pm.hit('hit!'); divider();
        return 1;
    }
    if (x === 2) {
        pm.hit('hit!'); divider();
        return 2;
    }

    if (memo[x]) return memo[x];
    memo[x] = staircase_memo(x - 1, memo) + staircase_memo(x - 2, memo);

    return memo[x];
}

// console.log(staircase_recursion(5));
console.log(staircase_memo(5));