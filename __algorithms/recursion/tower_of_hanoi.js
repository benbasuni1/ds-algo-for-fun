// Approach 1: Recursion
const towerOfHanoi = n => {
  const helper = (n, a, b, c) => {
    if (n === 0) return;
    helper(n - 1, a, c, b);
    console.log('move disk', n, 'from', a, 'to', b);
    helper(n - 1, b, c, a);
  }

  // pm.strint(helper(n, 'A', 'B', 'C'));
  helper(n, 'A', 'B', 'C');
}


towerOfHanoi(3);
