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
  const arrayOfDigits = String(n).split('');
  for (let index = 0; index < arrayOfDigits.length; index++) {
    arrayOfDigits[index] = Number(arrayOfDigits[index]);
  }
  const digSum = arrayOfDigits.reduce((sum, element) => sum + element);
  if (digSum > 9) {
    return getSumOfDigits(digSum);
  } return digSum;
}

module.exports = getSumOfDigits;
