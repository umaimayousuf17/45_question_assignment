// Define the function to show magicians names
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
  }
  
  // Function to make magicians great through .map() it will modify array
  function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`);
  }
  
  // Define an array of magicians names
  let magician_names = ["Harry Poter", "Ayan", "Hamna"];
  
  // Making a copy of Orignal array through.slice() function
  let copy_magician_names = magician_names.slice()
  
  // Modify the copied array to include "The Great" with thier names
  let great_magicians = make_great(copy_magician_names);
  
  // Call the function to show magicians names
  show_magicians(great_magicians);
  