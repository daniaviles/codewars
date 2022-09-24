// Calculate Average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if(array.length === 0){
      return 0;
    }
     let sum = array.reduce(function(a,b){
       return a + b
     },0)
     return sum / array.length;
   }