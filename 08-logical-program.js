


let array = [10, 20, 45, 30, 77, 60];
console.log('======= Find the odd numbers from the array ========');
let oddNumCount = 0;
for (const element of array) {
    if (element%2==1) {
        console.log(element);
        oddNumCount = oddNumCount + 1;
    }
}
console.log(`Odd number count is : ${oddNumCount}`);

console.log("======= WAP to count the vowels including lower and upper case ==============");

const myLove = "I Love only JavaScript";
const vowels = "aeiou";
let counterVowels = 0;
for (const char of myLove) {
    if (vowels.includes(char.toLowerCase())) {
        counterVowels = counterVowels + 1; 
    }
}
console.log(`Vowel count is : ${counterVowels}`);

console.log("======= WAP to count the a characters including lower and upper case ==============");
const sentence = "JavaScript LANGUAGE";
let countAChar = 0;
for (const char of sentence) {
    if (char == 'a' || char == 'A') {
        countAChar = countAChar + 1;
    }
    // if (char.toUpperCase() == 'A') {
    //     countAChar = countAChar + 1;
    // }
}
console.log(`Total a char is : ${countAChar}`);
