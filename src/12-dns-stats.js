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
  const res = {};
  const splittedArr = domains.map((element) => element.split('.'));
  let item = '';
  splittedArr.forEach((element) => {
    let counter = element.length - 1;
    while (counter >= 0) {
      item += `.${element[counter]}`;
      if (res[item]) {
        res[item]++;
      } else {
        res[item] = 1;
      }
      counter--;
    }
    item = '';
  });
  return res;
}

module.exports = getDNSStats;
