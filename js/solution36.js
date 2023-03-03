//Maximum subarray sum


// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    let tempSum = 0;
    let maxSum = 0;
    
    if(arr.length ===0){
      return 0
    }
    arr.forEach(a =>{
      tempSum = Math.max(a, tempSum + a)
      maxSum = Math.max(maxSum, tempSum)
    })
    return maxSum
  }

  //1. We could loop through the array, but if we do a "for each" through every element, we can do a comparison of
  //variable sum (plus the element) against the element intself. 

