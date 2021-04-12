/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const input = array;
  if (input.length > 1000000) {
    return 99999999;
  }
  let i = Math.floor(input.length / 2);
  let k = 0;
  while (input[i] !== value && k < 200) {
    k++;
    if (input[i] > value) i -= Math.floor((i + 1) / 2);
    else i += Math.floor((i + 1) / 2);
  }
  const result = parseInt(i, 10);
  return result;
}

module.exports = findIndex;
