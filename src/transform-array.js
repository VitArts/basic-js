import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

export default function transform(arr) {

let newArr = arr.concat()

if (!Array.isArray(arr)) {
  return '\'arr\' parameter must be an instance of the Array!'
  }

if (newArr.includes('--double-prev')) {
  if (newArr.indexOf('--double-prev') == 0) {
    newArr.splice(newArr.indexOf('--double-prev'), 1)
  } else {
  newArr.splice(newArr.indexOf('--double-prev'), 0, newArr.indexOf('--double-prev'))
  newArr.splice(newArr.indexOf('--double-prev'), 1)
  }
}

if (newArr.includes('--discard-prev')) {
  if (newArr.indexOf('--discard-prev') == 0) {
    newArr.splice(newArr.indexOf('--discard-prev'), 1)
  } else {
    newArr.splice(newArr.indexOf('--discard-prev')-1, 2)
  }
}

if (newArr.includes('--double-next')) {
  if (newArr.indexOf('--double-next') == newArr.length - 1) {
    newArr.splice(newArr.indexOf('--double-next'), 1)
  } else {
    newArr.splice(newArr.indexOf('--double-next'), 0, newArr.indexOf('--double-next')+1)
    newArr.splice(newArr.indexOf('--double-next'), 1)
  }
}

if (newArr.includes('--discard-next')) {
  newArr.splice(newArr.indexOf('--discard-next'), 2)
}


// for (let i = 0; i < arr.length; i++) {
  
// if (arr[i] == '--double-next') {
//   newArr.push(arr[i + 1])
// } else if (arr[i] == '--double-prev') {
//   newArr.push(arr[i - 1])
// } else if (arr[i] == '--discard-prev') {
//   newArr.splice(i-1, 1)
// } else if (arr[i] == '--discard-next') {
//   newArr.splice(i+1, 1)
// } else {
//   newArr.push(arr[i])
// }
// }

return newArr;

}
