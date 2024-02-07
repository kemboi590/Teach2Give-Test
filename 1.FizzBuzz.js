/*
Question 1: FizzBuzz

Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for 
multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print 
"FizzBuzz".
*/


// using switch case
for (let number = 1; number <= 100; number++) {

    switch (true) {
        case (number % 3 === 0 && number % 5 === 0):
            console.log('FizzBuzz');
            break;

        case (number % 3 === 0):
            console.log('Fizz');
            break;

        case (number % 5 === 0):
            console.log('Buzz');
            break;

        default:
            console.log(number);
            break;
    }
}


