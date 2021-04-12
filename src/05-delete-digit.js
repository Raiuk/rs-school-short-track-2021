/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = n.toString();
  let res = 0;
  for (let i = 0; i < number.length; i++) {
    const newVar = Number(number.slice(0, i) + number.slice(i + 1, number.length));
    if (res < newVar) {
      res = newVar;
    }
  }
  return res;
}

module.exports = deleteDigit;
