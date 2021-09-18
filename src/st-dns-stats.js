import { NotImplementedError } from '../extensions/index.js';

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


 getDNSStats([
  'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
 ])

export default function getDNSStats(domains) {
  let obj = {}
  let arr = domains.map((a) => a.split('.'));


  arr.forEach((a) => {
    let domain = `.${a[a.length - 1]}`;

    for (let i = a.length - 1; i >= 0; i--) {
      if (domain in obj) {
        ++obj[domain];
      } else {
        obj[domain] = 1;
      }
      domain += `.${a[i - 1]}`;
     
    }

  })

  return obj;
}
