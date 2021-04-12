/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let buf = str[0];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) counter++;
    else {
      if (counter <= 1) res += buf;
      else res += counter + buf;
      counter = 1;
      buf = str[i + 1];
    }
  }
  return res;
}

module.exports = encodeLine;
