const arrays = {
  posneg: (size = 8, lower = -100, upper = 100) => {
    let result = new Array(size);
    for (let i = 0; i < size; i++)
      result[i] = Math.floor(Math.random() * (upper - lower)) + lower;
    console.log('Input: ', result);
    return result;
  }
}

const num = {
  pos: (lower = 0, upper = 100) => Math.random() * (upper - lower) + lower
}

module.exports = {
  arrays,
  num
}
