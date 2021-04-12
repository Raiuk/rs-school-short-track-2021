/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1Old, s2Old) {
  let res = 0;
  let s1 = s1Old;
  let s2 = s2Old;
  s1.split('').forEach((el) => {
    if (s2.includes(el)) {
      s2 = s2.replace(el, '');
      s1 = s1.replace(el, '');
      res++;
    }
  });
  return res;
}

module.exports = getCommonCharacterCount;
