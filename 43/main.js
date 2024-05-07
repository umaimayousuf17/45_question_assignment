// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Harry Poter", "Ayan", "Hamna"];
// Making a copy of Orignal array through.slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with thier names
var great_magicians = make_great(copy_magician_names);
// Call the function to show magicians names
show_magicians(great_magicians);
