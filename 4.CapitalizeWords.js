/**
 *
Question 4: Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the 
string, and then returns the result string.
Examples: 
"hi"=> returns "Hi"
"i love programming"=> returns "I Love Programming"


 */


function capitalizeWords(string) {

    let words = string.split(" "); // Split the string into an array
    // console.log(words); // returns an array

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);    // Capitalize the first letter of each word and concatenate the rest of the word
    }
    
    //console.log(words); // returns an array with the first letter of each word capitalized
    
    let capitalizedString = words.join(" ");  // Join the words back into a single string

    return capitalizedString;
}

// Testing examples
console.log(capitalizeWords("hi"));  // "Hi"
console.log(capitalizeWords("i love programming"));  // "I Love Programming"
console.log(capitalizeWords("i love my self"));  //  I Love My Self 
console.log(capitalizeWords("iam a full stack developer"));  // Iam A Full Stack Developer
