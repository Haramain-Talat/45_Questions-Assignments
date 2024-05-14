//QUESTION NO 24:
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
//ANSWER:
let str1 = "Talat";
let str2 = "Fatima";
let num1 = 5;
let num2 = 10;
let Arr = [1, 2, 3, 4, 5];
//• Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings:");
console.log(str1 === "Talat");
console.log(str1 === str2);
//• Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log(str1.toLowerCase() === "Talat");
console.log(str2.toLowerCase() !== "Fatima");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical tests:"),
    console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !== 10);
//• Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num2 > 15));
//• Test whether an item is in a array
console.log("\nTests whether an item is in an array:");
console.log(Arr.includes(3));
console.log(Arr.includes(6));
//• Test whether an item is not in a array
console.log("\nTests whether an item is not in an array:"),
    console.log(!Arr.includes(6));
console.log(!Arr.includes(2));
export {};
