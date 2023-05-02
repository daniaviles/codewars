//Portion of Array 

// DESCRIPTION:
// You will be given an Array(a), starting position (i) and number of portion to return (n) . Your task is to return n portion of the array (a) starting from position (i ). The starting position could be negative, in that case you should start counting reverse direction till you get all your n portion. In case you can not find the exact n portion of elements counting from the starting position i or the starting position i is out of the index of the array, you should return -1 (throw an ArgumentOutOfRangeException in C#).

// example:

// function p([1,2,3,4],1,2)
//  should return [2,3]
 
//  how ?
//  Array => [1,2,3,4]
//            | | | |
//  index =>  0 1 2 3
//  portion     |_|   => [2,3]
 
// function p([1,2,3,4],-1,2)
//  should return [2,3]
 
//  how ?
//  Array => [1,  2,  3, 4]
//            |   |   |  |
//  index=>   -3 -2  -1  0
//  portion=>     |___|      =>[2,3]    
 
// function p([1],1,5)
//  should return -1

// how ? 
// Array => [1]
//           | 
// index=>   0
// required starting index =>1 , which does not exist so we return -1

function portion(a,i,n){
  
  let arr = [];

  if(i > a.length - 1 || a.length === 0){
    return - 1
  }

  
  else if(i < 0){
    
    i = (a.length - 1) - Math.abs(i);
    n = (i+1) - n;
    
    if(n < 0){
      return -1;
    }
    for(let x = n; x <= i; x++){
      arr.push(a[x])
    }
    return arr;
  }
  
  else{
    for(let z = i; z <= i + (n-1); z++){
      if(a[z] === undefined){
        return -1;
      }
      arr.push(a[z])
    }
  return arr;
    
  }
}
