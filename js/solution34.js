// Rot13

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


function rot13(message){
    //loop through string
    //determine each element. Is it a letter or something else?
    //if it's a letter, find the letter within the array, alphabet.
    //whatever the index of the letter is, add 13 to it and retrieve the new substituted letter.
    //push the subletter into a new array.
    //if it's not a letter, push whatever it is into a new array.
    //return new array joined as a string.
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let cipheredAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let newMessage = '';
    for (let i=0; i < message.length; i++) {
        if(alphabet.includes(message[i])){
            let index = alphabet.indexOf(message[i]);
            newMessage += cipheredAlphabet[index];
        }
        else{
        newMessage += message[i]
        }
    }
    return newMessage;
}