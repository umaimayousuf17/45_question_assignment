// Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians names
var magician_names = ["Harry Poter", "Ayan", "Hamna"];
// Call the function to print each magician name
show_magicians(magician_names);
