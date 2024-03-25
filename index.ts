// Task 43
// unchange magician: start with your work from exercise 41. call the function make_graet() with the copy of the array of megician.
// names. because the original array will be unchanged, return the new array and store it in a seperate array.
// call show_megician() with each array to show that you have one array of the original names and one array with the great added 
// to each megicians name

// function make_graet2(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];
//     for(let i = 0; i < magicians.length; i++) {
// greatMagicians.push(magicians[1] + "the great");
//     }
//     return greatMagicians;
// }
// const megician3: string[] = ["jabir" ,  "dawood" , "rashid"];

//////////////////////////////////////////

// const greatMagician2:string[] = make_graet2(megician3);
// console.log(greatMagician2);
// console.log(megician3);


//Task 44
//sandwichiches: write a function that accept a array of items a person wants a sandwich. the function 
//should have one prameter that collects in many items as the function call provides, and its should print 
//a summary of the sandwich that as being ordered. call the function of three times using different number 
//of agreement each times. 
// function sandwich(items:string[]): void{
//     console.log("sandwich order:")
//     for(let i = 0; i < items.length; i++){
//         console.log(` ${items[0]}`);
//     }
// }
// console.log("enjoy your sandwich Sabir")
// console.log("pizza")
// console.log('beef')
// console.log("mutton")


// Task 45
//Cars: write a function that store information about a car an object. the function should always
//Receive a manifacturer and model name. it should than accept arbitrary number of key word arguments.
//Call the function with the require information into other name _value pairs,suchas colour or an 
//optional feature. print the object that return to make sure all the information was stored correctly 
// type car = {
// manufacture: string
// model: string
// [key: string]: any;
// } 
// function createcar(manufacture: string, model: string, optional: Record<string, any>): car {
//     return{
//         manufacture,
//         model,
//         ...optional
//     }
// }
// const mycar: car = createcar("toyota", "corola", {colour: "silver",year: "2024"})
// console.log(mycar)