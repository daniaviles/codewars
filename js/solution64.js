// Factorial

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial


function factorial(n){
    let product = 1;
    if(n === 0){
      return 1
    }
    else{
      for(let i = 1; i <= n; i++){
        product = product * i
      }
    }
    return product
  }