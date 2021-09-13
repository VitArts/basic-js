import { NotImplementedError } from '../extensions/index.js';

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

 export default function encodeLine(str) {
  let newStr = ''
  let num = 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      num += 1
    } else {
      if (num > 1) {
        newStr += num + str[i]
      } else {
        newStr += str[i]
      }
      num = 1
    }
  }
  return newStr
}
