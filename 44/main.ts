// Define a function with a rest parameter that accepts items arguments representing our sandwich ingredients
function makeSandwich(...items: string[]) {
    // Print a message to the console indicating we are making a sandwich
    console.log("\nMaking a sandwich with the following items:");
  
    // Iterate over the items array using forEach loop and print each item on a new line
    items.forEach(singleItem => console.log(singleItem));
  
    // Print a message to the console indicating the sandwich is complete
    console.log("Now Enjoy Sandwich");
  }
  
  // Call the function three times with different numbers of arguments to demonstrate its versatility
  makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
  makeSandwich("Bread", "Butter");
  makeSandwich(
    "Bread",
    "Butter",
    "Mayo",
    "Egg",
    "Cheese",
    "Chicken",
    "Lettuce",
    "Tomato"
  );
  