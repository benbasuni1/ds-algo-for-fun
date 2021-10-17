const arrays = {
  posneg: (size = 8, lower = -100, upper = 100) => {
    let result = new Array(size);
    for (let i = 0; i < size; i++)
      result[i] = Math.floor(Math.random() * (upper - lower)) + lower;
    console.log('Input: ', result);
    return result;
  }

}

module.exports = {
  arrays
}
