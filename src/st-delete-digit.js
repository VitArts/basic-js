import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

deleteDigit(152)

export default function deleteDigit(n) {
  let arr = Array.from(String(n), Number)
  let min = Math.min.apply(null, arr)
    arr.splice(arr.indexOf(min), 1)
  let num = arr.join('')
  return Number(num)
}
