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
function getObj (s) {
  const result = s.split('').reduce((acc, item) => {
    acc[item] = item in acc ? acc[item] + 1 : 1;
    return acc;
  }, {});
  return result;
}

function getCommonCharacterCount(s1, s2) {
  const s1Obj = getObj(s1);
  const s2Obj = getObj(s2);
  const result = Object.keys(s1Obj).reduce((acc, key) => {
    if (key in s2Obj) {
      return acc + Math.min(s1Obj[key], s2Obj[key]);
    }
    return acc;
  }, 0);
  return result;
}

module.exports = getCommonCharacterCount;
