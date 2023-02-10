// Simple multiplication


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    //write an if statemen to test if it meets the conditions:
  if(number % 2 === 0){
    return number * 8;
  }
  else{
    return number * 9;
  }
}
