// Assignment 6
// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop
// var userInput:string|null = prompt("Enter a number");
// var num:number =Number(userInput);
//  for(let i = 1; i <= num; i++){
//     console.log(i);
//  }
// 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
// var userInput:string|null = prompt("Enter a number");
// var num:number = Number(userInput);
// while (num >= 1) {
//     console.log(num);
//     num--;
// }
// 3. Write a ts program to print all alphabets from a to z. - using while loop
// var string:string = "az";
// var i:number = string.charCodeAt(0);
// while (i <= string.charCodeAt(1)) {
//     console.log(String.fromCharCode(i));
//     i++;
// }
// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop
// var x = 100;
// var i = 1;
// while (i <= 100) {
//     if(i % 2 == 0){
//         console.log(i);
//     }
//     i++;
// }
// 5. Write a ts program to print all odd number between 1 to 100.
// for (let i = 1; i <= 100; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
//     i++;
// }
// 6. Write a ts program to find sum of all natural numbers between 1 to n.
// var n:number = 111;
// var sum:number = 0;
// for (let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log(sum);
// 7. Write a ts program to find sum of all even numbers between 1 to n.
// var n:number = 100;
// var sumOfEven:number = 0;
// for (let i = 1; i <= n; i++){
//     if(i % 2 == 0){
//         sumOfEven = sumOfEven + i;
//     }
// }
// console.log(sumOfEven);
// 8. Write a ts program to find sum of all odd numbers between 1 to n.
// var n:number = 100;
// var sumOfOdd:number = 0;
// for( let i=1; i<= n; i++){
//     if(i % 2 != 0){
//         sumOfOdd += i;
//     }
// }
// console.log(sumOfOdd);
// 9. Write a ts program to print multiplication table of any number.
var n = 2;
for (var i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (i * n));
}
