// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes

// You can see another examples in the "Sample tests".

// function meeting(s) {

    // s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
    // take out all of the colons and replace with a space, replace all semi-colons and replace with comma + space.
    // then you have:

    // s = "Fred Corwill, Wilfred Corwill, Barney Tornbull, Betty Tornbull, Bjon Tornbull, Raphael Corwill, Alfred Corwill"
    // turn the string into an array:
    // s = s.split(" ")
    // now you have:
    // s = [Fred, Corwill, Wilfred, Corwill, Barney, Tornbull, Betty, Tornbull, Bjon, Tornbull, Raphael, Corwill, Alfred, Corwill]

    // alternatively

    // let modifiedList = 

// function meeting(s) {
//     s = s.split(" ");
//     s = s.filter(element => element.match(/(;| :)/g, " ")).length;
//     let lastNames = []
//     // Then you'll have this:
//         // s = [Fred, Corwill, Wilfred, Corwill, Barney, Tornbull, Betty, Tornbull, Bjon, Tornbull, Raphael, Corwill, Alfred, Corwill]
//     // Loop through the array, loop through it again, and push the last names into the last name array
//     //
//     console.log(s)
    
//     }

function meeting(s) {
    return s.replace(/;/gi,' ').split(' ').map(v=>v.split(':').reverse().join(', ').toUpperCase()).sort()
    //1. replace all of the semi-colons and replace with a space
    //2. split the string so that each elemetn appears as a [firstname:lastname, firstname, lastname...etc]
    //3. map the array such that you take each element and use the split method to split the element by the colon and you reverse the element and then join it by a comma and space.
    //4. no you have [lastname:firstname, lastname:firstname,...etc] --> [LASTNAME, FIRSTNAME, LASTNAME, FIRSTNAME, LASTNAME, FIRSTNAME,...etc]
    //5. sort the elements alphabetically.
    //6. Lastly, map the array such that you take each element and concatentate it with parenthesis and join it as a string again:
    // (LASTNAME, FIRSTNAME), (LASTNAME, FIRSTNAME), (LASTNAME, FIRSTNAME),
    .map(v=>'('+v+')').join('')
 }
