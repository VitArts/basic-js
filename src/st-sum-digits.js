import { NotImplementedError } from '../extensions/index.js';

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

getSumOfDigits(99)

export default function getSumOfDigits(n) {
  let num = 0
  let numTwo = 0

  for (let i = 0; i < String(n).length; i++) {
    num += +String(n)[i] 
  }

  if (num < 10) {
  return num 
  } else {
   for (let j = 0; j < String(num).length; j++) {
    numTwo += +String(num)[j]
   }
   return numTwo
}

}
