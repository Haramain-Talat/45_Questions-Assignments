// QUESTION NO 29:
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for 
//certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//ANSWER:
const favourite_fruits = ["Banana", "Apple", "Mango"];
if (favourite_fruits.includes('Banana')) {
    console.log("You really like bananas!");
}
if (favourite_fruits.includes('Apple')) {
    console.log("You really like apples!");
}
if (favourite_fruits.includes('Mango')) {
    console.log("You really like mangoes!");
}
if (favourite_fruits.includes('Strawberry')) {
    console.log("You really like strawberries!");
}
if (favourite_fruits.includes('Orange')) {
    console.log("You really like oranges!");
}
export {};
