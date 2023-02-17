// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
  var multiple = 10;
  var result = [];
  //loop through the num while it is greater than 1. Divide num by 10 and get the remainder. 
  while (num > 1){
    var remainder = num%multiple;
    if(remainder >0){
    //whatever the remainder is, take it and place it inside of an array. 
      result.unshift(remainder);
    }
    //redefine num by subtracting the remainder from the original num.
    num -= remainder;
    multiple = multiple * 10;
    //start loop again while new num is greater than 1
  }
  //return everything inside the array and concatentate them with a joined "+" in between each element.
  return result.join(" + ");
}