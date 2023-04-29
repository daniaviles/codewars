// Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {

    let firstLetter = name[0].toUpperCase()
    name = name.toLowerCase().slice(1,name.length)
    
    return `Hello ${firstLetter + name}!`
    
  };