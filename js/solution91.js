// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .

function minSum(arr) {
  
  arr = arr.sort((a,b)=>a-b)
  let sum = 0;
  for (let i = 0;i < arr.length / 2; i++){
    sum += arr[i] * arr[arr.length - 1 - i]
  }
  return sum
}