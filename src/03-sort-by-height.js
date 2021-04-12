/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arrInput) {
  const arr = arrInput;
  let sortArr = arr.join(',').split('-1,').join('');
  sortArr = sortArr.split(',').sort((a, b) => (b - a));
  arr.forEach((el, index) => {
    if (el !== -1) {
      arr[index] = sortArr.pop();
    }
  });
  return arr;
}

module.exports = sortByHeight;
