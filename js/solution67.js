// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example

// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  
    arr = arr.sort(function(a, b){return b-a})
    let sum = 0;
    
    if(arr.length === 0 | arr.length === 1){
      return 0;
      
    }else{
      for(let i = 0; i < arr.length -1; i++){
        sum = sum + (arr[i] - arr[i+1])
      }
    }
    return sum;
  }