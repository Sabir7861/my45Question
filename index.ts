// //Task 1
// console.log("Hello World")

// //Task 2
// let FullName = "Sabir Ali"
// FullName = "100"
// console.log(FullName)

// //Task 3
// let personname = "Sabir ali"
// console.log(personname.toLowerCase());
// console.log(personname.toUpperCase());
// console.log(personname.replace(/\b\w/g, (char) => char.toUpperCase()));

// //Task 4
// console.log("Albert Einstine once said,\" A person who never made a mistake never tried anything now.\"");

// //Task 5
// let Famousperson = "Albert Einstein"
// let message = ( "once said, A person who never made a mistake never tried anything now")
// console.log(Famousperson, message)

// //Task 6
// let whitespacename = "\n\t Sabir Ali \n\t";
// console.log (whitespacename);
// let withoutwhitespacename = whitespacename.trim();
// console.log(withoutwhitespacename);

// //Task 7 and //Task 8
// console.log(4 + 4);
// console.log(12 - 4);
// console.log(4 * 2);
// console.log(16 / 2);

// //Task 9
// let FavNumber = 16;
// let message = "my favourite Number is:";
// console.log(message, FavNumber);

// //Task 10
// // Addition
// console.log(4 + 4);
// // Subtraction
// console.log(12 - 4);
// // Multipliction
// console.log(4 * 2);
// // Division
// console.log(16 / 2);

// //Task 11
// let friendsName = ["Dawood","Hamad"];
// console.log(friendsName);

// //Task 12
// let friendsName = ["Dawood","Hamad","Nazeefullah"];
// friendsName.forEach(FriendName => console.log(FriendName));

// //Task 13
// let transportationModes = ["sportbike","car", "cycle"];
// transportationModes.forEach(mode => console.log(`I would like to own a ${mode}`));

// //Task 14
// let guestlist = ["rasoolbux", "mehran", "sudheer"];
// guestlist.forEach(function (oneguest) { return console.log("salam".concat(oneguest, ",would i like to dinner with me?")); });

// //Task 15
// let guestlist = ["rasoolbux", "mehran", "sudheer"];
// let dontCome = guestlist[2];
// console.log(dontCome, "Nahi Ahh Sakhta");
// guestlist.splice(0, 1, "Najaf"); 
// guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));

// //Task 16
// // creating a Guestlist Array 
// let guestlist = ["rasoolbux", "mehran", "sudheer"];
// // print the making variable for those guest who cant come
// let dontCome = guestlist[2];
// // print the Guest name who cant come
// console.log(dontCome, "Nahi Ahh Sakhta");
// // Add or Remove values from guestlist array
// guestlist.splice(0, 1, "Najaf");
// // Message print from bigger table 
// console.log("GoodNews ! We have found a bigger table for dinner,");
// // Adding a new guest  at starting index of array
// guestlist.unshift("Amir");
// // Adding a new guest at adding index of array
// guestlist.push("Zaid");
// // Get a middle index of our guest list array
// let middleindex = Math.floor(guestlist.length / 2);
// // Adding a new guest to middle index of array
// guestlist.splice(middleindex, 0, "Jabir");
// // Print message of update list  
// console.log("update list of our Guest");
// // Sending  a invitation message of our guest one by one with their names
// guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",Would i like to dinner with me")); });

// //Task 17
// //initial list of guests
// let guest:  string[] = ["rasoolbux","sudheer","mehran","amir","zaid"];
// //Inform that only two guest can be invited 
// console.log("due to limited space, only two people can be invited for dinner");
//  //removing guest until only two names remain
// while(guest.length > 2) {
//      let removedGuest = guest.pop();
//      //remove the last guest from the list 
//      console.log(`sorry ,${removedGuest}, you are no longer invited to dinner.`);
// }
// // printing invitation to the remaining two guests 
// guest.forEach((guest) => {
//  console.log(`dear ${guest}, you are still invited to dinner.`)});
// // Removing last two name from the list 
// 'guests.pop()';
// 'guests.pop()';
// //printing the final list to conform it empty 
// console.log("final guest.list:", guest);

// //Task 18
// // store the locations in an array 
// let placeTovisit: string[] = ["Tokyo", "pakistan", "china"];
// // Print the array in its origional order 
// console.log("Orignal order:", placeTovisit);
// // print the array in alphabaticaal order with out modifying the actaul list 
// console.log("Alphabatical orde:", [...placeTovisit].sort());
// // Show that the array is Still in its orignal order 
// console.log("Orignal order after sorting:", placeTovisit);
// // Print the array in reverse alphabatical order without changing the order of orignal list 
// console.log("Reverse alphabatical order", [...placeTovisit].sort().reverse());
// // Show that the array is still in its orignal order 
// console.log("Orignal order after reverse sorting:", placeTovisit);
// // Reverse the order of the list 
// placeTovisit.reverse();
// console.log("Reversed order:", placeTovisit);
// // Reverse the order to the list again to get back the orignal order 
// placeTovisit.reverse();
// console.log("Back to original order:", placeTovisit);
// // Sort the array in alphabetical order
// placeTovisit.sort();
// console.log("Sorted in alphabatical order:", placeTovisit);
// // Sort the array in reverse alphabetical order 
// placeTovisit.sort((a, b) => b.localeCompare(a));
// console.log("Sorted in reverse alphabatical order:", placeTovisit);
 
// //Task 19
// let invitations : string[] = ["rasoolbux", "mehran"];
// let count_invitations : number = invitations.length;
// console.log(`$(count_invitations) people will come to the dinner`);

// //Task 20
// let country: string [] = ["pakistan", "india","japan","china"];
// console.log("list of country");
// console.log(country);

