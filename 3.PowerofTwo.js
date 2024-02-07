
/*
Question 3: Power of Two

Write a program that takes an integer as input and returns true if the input is a power of two.

Examples: 
8=> returns true
6=> returns false

*/

function isPowerOfTwo(number) {
    if (number <= 0) {
        return false; // check if the number is less than or equal to 0
    }
    return (number & (number - 1)) === 0;  // used to check if a number is a power of 2
}

// Testing examples
console.log(isPowerOfTwo(8)); // returns true
console.log(isPowerOfTwo(6)); // returns false
console.log(isPowerOfTwo(4)); // returns true
console.log(isPowerOfTwo(16)); // returns true
console.log(isPowerOfTwo(17)); // returns false