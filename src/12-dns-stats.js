/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const input = domains;
  const res = new Map();
  input.forEach((el) => {
    let element = el;
    element = element.split('.').reverse();
    for (let i = 0; i < element.length; i++) {
      let str = '';
      for (let j = 0; j < i + 1; j++) {
        str += `.${element[j]}`;
      }
      if (!res.has(str)) res.set(str, 1);
      else res.set(str, res.get(str) + 1);
    }
  });

  return Object.fromEntries(res.entries());
}

module.exports = getDNSStats;
