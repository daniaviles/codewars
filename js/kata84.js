// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(integer){
  
    let string = '';
    let square = ''
    let x = 1;
    
    for(let i = 1; i <= integer; i++){
      string = string + "+"
    }
    string = string + "\n"
    
    square = string.repeat(integer)
    return square.slice(0, square.length - 1)
  }