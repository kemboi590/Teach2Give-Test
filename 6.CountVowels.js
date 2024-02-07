/**
 * 
 * Question 6: Count Vowels
Write a program that counts the number of vowels in a sentence.
eg " Hello World " => returns 2

 */

function countVowels(sentence) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of sentence.toLowerCase()) {  // convert the sentence to lowercase
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Testing examples
console.log(countVowels("Hello World")); // 3
console.log(countVowels("I am a full stack developer")); // 9
console.log(countVowels("Good Money")); // 4

