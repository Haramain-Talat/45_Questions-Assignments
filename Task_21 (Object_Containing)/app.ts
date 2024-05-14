//QUESTION NO 21:

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//ANSWER:

interface type {
    Name:string, Age:Number, Profession:String
}

let OBJ:type = {Name:'Affan', Age:25, Profession:`Teacher`};

console.log(`\n Object Containing Information About Me : \n`);
console.log(`My name is: ${OBJ.Name}`);
console.log(`I am ${OBJ.Age} year old`);
console.log(`I am a ${OBJ.Profession}`);
