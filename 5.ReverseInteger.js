/**
 * Write a program that takes an integer as input and returns an integer with reversed digit 
ordering.
Examples:
For input 500, the program should return 5.
For input -56, the program should return -65.
For input -90, the program should return -9.
For input 91, the program should return 19.

 */

function reverseInteger(number) {

    let stringNumber = Math.abs(number)  // returns the absolute value of a number
    .toString(); // converts a number to a string
    
    let reveredString = stringNumber  // Reverse the string
    .split('')
    let splitted = reveredString   
    // console.log(splitted) // Split the string into an array
    let reversedArray =splitted.reverse()  
    // console.log(reversedArray)   // Reverse the array
    let joined = reversedArray.join('');  
    // console.log(joined)  // Join the array back into a single string


    let reversedNumber = parseInt(joined);
    // console.log(typeof(reversedNumber))  // will be of type number

  
    if (number < 0) {
        reversedNumber *= -1; // reversedNumber = reversedNumber * -1 for a number less than 0
    }
    return reversedNumber;
}

// Testing examples
console.log(reverseInteger(500));  // 5
console.log(reverseInteger(-56));  // -65
console.log(reverseInteger(-90));  // -9
console.log(reverseInteger(91));   // 19

