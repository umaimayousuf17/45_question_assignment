// creating a funtion with parameters which return a values in string
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Calling the function and storing the returned value in a variable
  let place = city_country("Karachi", "Pakistan");
  
  // Printing the returned value
  console.log(place);
  