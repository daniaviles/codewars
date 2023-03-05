// 5 Without Numbers
// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

function unusualFive() {
    let num = 'fives'
    return num.split('').length;
  }

  // More concise solution would be:

  // function unusualFive(){
//     return 'fives'.length
//   }