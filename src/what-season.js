import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
//  getSeason(new Date(1375, 5, 1, 12, 18, 41, 652))
//  getSeason(new Date(1994, 1, 2, 3, 4, 5))
//  getSeason(new Date(1, 4, 6, 7, 8, 9))


export default function getSeason(date) {

  const arr = String(date).split(' ');

if (arr[1] == 'Feb' || arr[1] == 'Jan' || arr[1] == 'Dec') {
  return 'winter'
}

if (arr[1] == 'Mar' || arr[1] == 'Apr' || arr[1] == 'May') {
  return 'spring'
}

if (arr[1] == 'Jun' || arr[1] == 'Jul' || arr[1] == 'Aug') {
  return 'summer'
}

if (arr[1] == 'Sep' || arr[1] == 'Oct' || arr[1] == 'Nov') {
  return 'autumn'
}

//consolereturn 'Invalid date!'


}
