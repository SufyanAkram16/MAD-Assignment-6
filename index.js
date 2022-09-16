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
// var n:number = 2;
// for( let i = 1; i<=10; i++){
//     console.log(n + " x " + i + " = " + (i*n));
// }
// 10. Write a ts program to count number of digits in a number.
// var number:number = 156;
// var dig:number = number.toString().length;
// console.log(dig);
// 11. Write a ts program to find first and last digit of a number.
// var number:number = 5464;
// var dig:string = number.toString();
// var firstDigit:number = Number(dig.charAt(0));
// var lastDigit:number = Number(dig.charAt(dig.length-1));
// console.log("The first digit of " + number +" is " + firstDigit + " and last digit of " + number + " is " + lastDigit );
//  12. Write a ts program to find sum of first and last digit of a number.
// var num:number = 454643513156;
// var str:string = num.toString();
// var firstDigit:number = Number(str.charAt(0));
// var lastDigit:number = Number(str.charAt(str.length-1));
// var sum:number = firstDigit + lastDigit;
// console.log(sum);
// 13. Write a ts program to swap first and last digits of a number.
// var num:string|null = prompt("Enter a number");
// let temp:string = "";
// let answer:string = ""; 
// for(let i = 0; i< num!.length; i++){
//     if(i == 0){
//         temp = num![i];
//     }
//     else if(i == num!.length-1 ){
//         answer = answer + temp;
//         answer = num![i] + answer;
//     }
//     else{
//         answer = answer + num![i];
//     }
// }
// console.log(answer);
// 14. Write a ts program to calculate sum of digits of a number.
// var num:number = 7895;
// var temp:string = num.toString();
// var sum = 0;
// for(let i = 0; i<temp.length; i++){
//     sum = sum + parseInt(temp[i]);
// }
// console.log(sum);
// 15. Write a ts program to calculate product of digits of a number.
// var num:number = 456483;
// var temp:string = num.toString();
// var product:number = 1;
// for( let i = 0; i < temp.length; i++){
//     product *= parseInt(temp[i]);
// }
// console.log(product);
//16. Write a ts program to enter a number and print its reverse.
var num = 1234561122;
var temp1 = num.toString();
var reverse = "";
for (var i = temp1.length - 1; i >= 0; i--) {
    reverse = reverse + temp1[i];
}
console.log(reverse);
