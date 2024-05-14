//QUESTION NO 15:
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who
//can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
//ANSWER:
let Guest_List = ["Areeba", "Ayat", "Ayzal"];
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear miss.${Guest_List[i]}: \n\nit is our pleasure to invite you in our party.\n\nThank you!`);
}
console.log(`"Unfortunately ${Guest_List[0]}, can't come to dinner."`);
Guest_List[0] = "Fatima";
console.log("\n NEW LIST OF INVITATION: \n");
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear miss.${Guest_List[i]}: \n\nit is our pleasure to invite you in our party.\n\nThank you!`);
}
export {};
