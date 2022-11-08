// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  
    string = string.split("")
    
    let newString = [];
    
  
    for(let i = 0; i < string.length; i++){
      if(string[i] === string[i].toLowerCase()){
        newString.push(string[i]);
      }
      else if(string[i] === string[i].toUpperCase()){
        newString.push(" " + string[i])
      }
    }
    return newString.join("")
  }
  