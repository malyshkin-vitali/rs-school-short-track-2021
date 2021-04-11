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
// function getEmailDomain(email) {
//   const array = email.split('@');
//   return array[array.length - 1];
// }

function getEmailDomain(email) {
  const RegExp = /(?<=@)([^.].+\.\w+$)/gi;
  return email.match(RegExp)[0];
}

module.exports = getEmailDomain;
