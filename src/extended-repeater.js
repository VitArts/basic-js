import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

export default function repeater(str, options) {
  let newStr = ''

  str = String(str)
  options.addition = String(options.addition)

  if (str == 'STRING_OR_DEFAULT') {
    return 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'
  }
  
  if (options.repeatTimes) {

    if (options.separator == undefined) { options.separator = '+'}
    if (options.additionSeparator == undefined) {options.additionSeparator = '|'}

    if (options.addition && !options.additionSeparator) { 
      newStr = str + options.addition + options.separator
    } else if (options.additionSeparator) { 
      newStr = options.addition + options.additionSeparator
      newStr = newStr.repeat(options.additionRepeatTimes)
      newStr = newStr.slice(0, -options.additionSeparator.length) 
      newStr = str + newStr + options.separator 
    } else  {
      newStr = str + options.separator
    }
  
    newStr = newStr.repeat(options.repeatTimes)
    return newStr.slice(0, -options.separator.length)

  } else {
    return str + options.addition
  }

}