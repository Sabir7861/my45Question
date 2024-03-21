//Task 36
// //T-shirt: Wright a function called make_shirt() that accept a size and the text of a message that should be printed on athe shirt.
// //The function should print a sentence sumarizing the size of the shirt and the message  printed on it. call the function.
// function makeShirt(size: string, text: string): void {
// console.log(`/n you order a ${size} shirt that says  ${text}`); 
// }
// makeShirt('large', `"i love typescript"`);
// makeShirt('medium', `"i need a big shirt"`);

//Task 37
// //Large shirts: modify the make_shirt() function so that shirts are large by default with a message that reads i love typescript.
// //make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function makeShirt(size: string = `large`, text:string = `i love typescript`): void {
//     console.log(`you have order a ${size}, shirt that says ${text}`);
// }
// makeShirt();
// makeShirt(`medium`);
// //Different message 
// makeShirt(`small`, `i need a big shirt to wear`);

//Task 38
// //cities: write a function called describe_city() that accept the name of a city and its  country. the function should print a 
// //simple sentence, such as karachi is in pakistan. give the parameter for the country a diffualt a value. call your function for 
// //three different cities, at least one of which is not in the default country.
// function describe_city(city: string, country: string = 'pakistan'): void {
//     console.log(`${city} is in ${country}`)
// } 
// describe_city(`karachi`) //default sentence
// describe_city(`france`,`europe`);
// describe_city(`sukkur`,`is in sindh`);

//Task 39
//City names: write a function called city_country()that takes in the name of city and its country. the function should return
//a string formutted like this:
//"lahore, pakistan"
//call your function with at least three city.country pairs, and print the value that returns   
// function cityCountry(city: string, country: string): string{
//     return `${city}, ${country}`
// }
// let c1 = cityCountry(`lahore`, `pakistan`);
// let c2 = cityCountry(`Tokyo`, `japan`);
// let c3 = cityCountry(`paris`,`france`);
// console.log(c1);
// console.log(c2);
// console.log(c3);

//Task 40
//Album: write a function called make_album() that builds a object describing a music  album. the function should take is in artist 
//name and an album title, and it should return a object containing these two places of information. use the function to make
//Three dictionaries representing different album. print each return value to show that object are storing the album
//information correctly. add an opptional parameter to make_album() that allows to store the number of tracks on in album.
//if the calling line includes a value for the number of tracks, Add that value that albums object. make at least one new 
//functoin call that includes the number of tracks on in album.
// function makeAlbum(artist: String, title: String): {artist:string;title:string} {
//     const dictionaries = {
//         artist: artist.charAt(0).toUpperCase() +artist.slice(1),
//         title: title.charAt(0).toUpperCase() + title.slice(1) 
//     };
//     return dictionaries;
// }
// let album = makeAlbum("ali" , "light") 
// console.log(album)
// album = makeAlbum("bilal" , "blue waves")
// console.log(album)   
// album = makeAlbum("sabir" , "books")
// console.log(album)






































