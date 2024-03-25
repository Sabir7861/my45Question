// Task 43
// unchange magician: start with your work from exercise 41. call the function make_graet() with the copy of the array of megician.
// names. because the original array will be unchanged, return the new array and store it in a seperate array.
// call show_megician() with each array to show that you have one array of the original names and one array with the great added 
// to each megicians name
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createcar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createcar("toyota", "corola", { colour: "silver", year: "2024" });
console.log(mycar);
