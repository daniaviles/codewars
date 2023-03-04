// The Supermarket Queue
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input

// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output

// The function should return an integer, the total time required.
function queueTime(customers, n) {
// think of n as an array
// fill n array with n number of zeros
// loop through the array and keep adding the smallest value to the new array
// then find max of new array
  let array = new Array(n).fill(0);

  for (var i = 0; i < customers.length; i++) {
    let index = array.indexOf(Math.min(...array));
    array[index] += customers[i];
  }

  return Math.max(...array);
}