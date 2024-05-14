//QUESTION NO 14:

//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 //Make a list that includes at least three people you’d like to invite to dinner.
 //Then use your list to print a message to each person, inviting them to dinner.

 //ANSWER:

 let Guest_List : string[] = ["Areeba", "Ayat", "Ayzal"]
 for (let i=0; i < Guest_List.length; i++){
   console.log('Dear miss.${Guest_List[i]}: \n\nit is our pleasure to invite you in our party.\n\nThank you!')
 }