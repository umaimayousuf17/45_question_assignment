// making a funtion
function make_shirt(size: string = "Large", printMessage: string = "I love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} printed on shirt`);
  }
  
  // creating a funtion with by-defult values
  make_shirt();

  // calling a funtion now with medium size and defult message
  make_shirt("Medium")

// calling a funtion now with small size and also different print message
make_shirt("Small", "I Love JavaScript")