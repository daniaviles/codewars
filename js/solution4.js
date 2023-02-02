// Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:

// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
// create functions to find the equivalent number of miliseconds from seconds, minutes, and hours
    let sec = s * 1000
    let min = m * 60000
    let hr = h * 3600000
//find the sum of seconds, minutes, and hours that are now converted to miliseconds
    return sec+min+hr;
  }