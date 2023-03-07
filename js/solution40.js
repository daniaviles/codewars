//String incrementer


// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// My Attempt:

function incrementString (strng) {
  
  let string = strng.replace(/[0 - 9]/g,"");
  let length = strng.length - string.length;
  let nums = strng.slice(string.length) || "0";
  
  nums = (parseInt(nums) + 1).toString();
  
  while(nums.length < length){
    nums = "0" + nums;
  }
  return string.concat(nums);
}

// Correct Solution using RedEx:

// const incrementString = strng =>
//   strng.replace(/[0-8]?9*$/, val => ++val);