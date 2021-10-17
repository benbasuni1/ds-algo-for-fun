require('colors');

// Basic Print {{{
  // 0. Divider
  const divider = () => console.log("----------------------------------".rainbow);

  const pm = {
    // 1. String/Int
    vars: (...args) => { args ? console.log(...args) : console.log('') },

    // 2. 1D Array
    arr: (a, ...args) => {
      let msg = '[';
        for (let i = 0; i < a.length; i++) {
          if (i === args[0] && i === a.length - 1) {
            msg += `${a[i]}`.bgRed.black;
          } else if (i === args[0] && i !== a.length - 1) {
            msg += `${a[i]}`.bgRed.black + ', ';
          } else if (i === args[1] && i === a.length - 1) {
            msg += `${a[i]}`.bgGreen.black;
          } else if (i === args[1] && i !== a.length - 1) {
            msg += `${a[i]}`.bgGreen.black + ', ';
          } else if (i === args[2] && i === a.length - 1) {
            msg += `${a[i]}`.bgBlue.black;
          } else if (i === args[2] && i !== a.length - 1) {
            msg += `${a[i]}`.bgBlue.black + ', ';
          } else if (i === a.length - 1) {
            msg += `${a[i]}`;
          } else {
            msg += `${a[i]}, `;
          }
        }
      msg += ']';
    
      console.log(msg);
    },

    // 3. 2D Array

    // 4. Recursion/Backtracking

    // 5. Linked List

    // 6. Tree

    // 7. Graph
  }

//}}}

module.exports = {
	divider,
  pm,
}
