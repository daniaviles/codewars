// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    //First we need to split the string wherever there are spaces (" ").
    //Then we need to grab each first letter of every word and capitalize. We can do this with charAt() and .toUpperCase() and slice
    //Then we need to map a new array with the new string words (which are now capitalized), joint by spaces (" "). We can use .join()

    return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  };