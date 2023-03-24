// Multiplication Table

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let array = []
    
    for(let i = 1; i<=size; i++){
      let tempArray = []
      for(let x = 1; x<=size; x++){
        tempArray.push(i*x)
      }
      array.push(tempArray)
    }
    return array
  }
  

  