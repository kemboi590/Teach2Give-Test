/*
Question 2: Fibonacci Sequence

Write a program to generate the Fibonacci sequence up to 100

*/

//Explanation

/*
The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones,  starting with 0 and 1. The sequence goes as follows
an example:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13
8 + 13 = 21
13 + 21 = 34
21 + 34 = 55
34 + 55 = 89

*/ 


let x = 0, y = 1, nextValue;

console.log(x); //0
console.log(y); //1

nextValue = x + y;  //0+ 1 = 1

while (nextValue <= 100) {
    console.log(nextValue);  // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89  - output
    x = y; 
    y = nextValue; 
    nextValue = x + y;  
}