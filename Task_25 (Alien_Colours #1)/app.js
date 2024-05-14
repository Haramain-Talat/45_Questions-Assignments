"use strict";
//QUESTION NO 25:
Object.defineProperty(exports, "__esModule", { value: true });
//Alien Colors #1: Imagine an alien was just shot down in a game.
//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green.
//If it is, print a message that the player just earned 5 points.
//ANSWER:
let alien_color = 'Green';
if (alien_color === 'Green') {
    console.log("Congratulations! you just earned 5 points!");
}
//• Write one version of this program that passes the if test and another that fails. 
//(The version that fails will have no output.)
alien_color = 'Red';
if (alien_color === 'Green') {
    console.log("Congratulation! you just earned 5 points!");
}
