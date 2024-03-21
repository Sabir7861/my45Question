// Task 41
// Megician: make a array of megicians names. pass the array to a function
// Called show_megician(), which prints the name of each megician in the array
function show_megician(megicians) {
    for (var _i = 0, megicians_1 = megicians; _i < megicians_1.length; _i++) {
        var megician = megicians_1[_i];
        console.log(megician.charAt(0).toUpperCase() + megician.slice(1));
    }
}
// 
// Task 42const megician: string[] = ["jabir" , "dawood", "rashid"]
// show_megician(megician)
// Great megician: start with a copy in your program from exercise 39. write a function called make_great() that modifies
//  the array of megician by adding the phrase the great to each megicians name. call show_megician () to see the list 
// has actualy been modified
function make_great(megicians) {
    for (var i = 0; i < megicians.length; i++) {
        megicians[i] = megicians[i] + " the great";
    }
}
var megicians2 = ["jabir", "dawood", "rashid"];
make_great(megicians2);
show_megician(megicians2);
