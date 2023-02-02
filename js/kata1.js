// Replace With Alphabet Position



// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example

// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    let newText = text.toLowerCase().replace(/ /g, "");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let num;
    let newArray = [];
    //loop through the newText (all lowercased and no spaces)
    for(i=0; i < newText.length; i++){
    //create a variable, num, to equal the index value where you find newText[i] within alphabet array. Add 1 to this result to set it equal to the correct letter/number correspondence.
        num = alphabet.indexOf(newText[i]) + 1;
    //if num returns as something less than 0, do not push it into the new array
        if (num > 0){
    //keep pushing the num into a new array
          newArray.push(num);
        }
    }
    //return the new array as a string, joint by spaces.
    return newArray.join(" ");
  }


