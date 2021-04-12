/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = email;
  const regex = /@.*$/;
  while (res.includes('@')) {
    res = (res.match(regex).toString()).slice(1);
  }
  if (res[0] === '.') res = res.slice(1);
  return res;
}

module.exports = getEmailDomain;
