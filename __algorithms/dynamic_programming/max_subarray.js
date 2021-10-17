const { divider, pm } = require('../../__common/utils.js');
const { arrays } = require('../../__common/test_cases.js');
const debug = (i, j, bI, bLen, currSum, finalSum, a) => {
  pm.vars('i', i, 'j', j);
  pm.vars('bI', bI, 'bLen', bLen, 'currSum', currSum, 'finalSum', finalSum);
  pm.arr(a, i, j);
  divider();
}

const ddebug = (i, currSum, maxSum, maxStart, maxEnd, currStart, a) => {
  pm.vars('currSum', currSum, 'maxSum', maxSum, 'maxStart', maxStart, 'maxEnd', maxEnd, 'currStart', currStart);
  pm.arr(a, i);
  divider();
}

// Approach 1: Brute Force
const maxSubArray_bruteforce = a => {
  let bI   = 0;
  let bLen = 0;
  let finalSum = null;

  for (let i = 0; i < a.length; i++) {
    let currSum = 0;
    for (let j = 1; j < a.length; j++) {
      currSum += a[i + (j - 1)];
      if (finalSum === null || currSum > finalSum) {
        bI   = i;
        bLen = j;
        finalSum = currSum
      }
      debug(i, j, bI, bLen, currSum, finalSum, a);
    }
  }

  pm.vars('Output: ', a.slice(bI, bI + bLen));
  return a.slice(bI, bI + bLen);
}

// Approach 2: Dynamic Programming
const maxSubArray_dp = a => {
  let maxStart = 0;
  let maxEnd   = a.length - 1;
  let currStart = 0;

  let maxSum   = -Infinity;
  let currSum  = 0;

  for (let i = 0; i < a.length; i++) {
    currSum += a[i];
    if (currSum > maxSum) {
      maxSum   = currSum;
      maxStart = currStart;
      maxEnd   = i;
    }

    if (currSum < 0) {
      currSum = 0;
      currStart = i + 1
    }
    ddebug(i, currSum, maxSum, maxStart, maxEnd, currStart, a);
  }

  pm.vars('Output: ', a.slice(maxStart, maxEnd + 1));
  return a.slice(maxStart, maxEnd + 1);
}

// maxSubArray_bruteforce(arrays.posneg());
// maxSubArray_bruteforce([26, -7, -3, -53, 93, -90, 69, 75]);
maxSubArray_dp([26, -7, -3, -53, 93, -90, 69, 75]);

