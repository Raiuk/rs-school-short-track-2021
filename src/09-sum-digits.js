/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = (n.toString()).split('');
  let buf = 0;
  let j = 0;
  while (res.length > 1 && j < 10) {
    j++;
    buf = 0;
    for (let i = 0; i < res.length; i++) {
      buf += Number(res[i]);
    }
    res = buf.toString().split('');
  }
  return Number(res.join(''));
}

module.exports = getSumOfDigits;
