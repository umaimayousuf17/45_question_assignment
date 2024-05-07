// creating a funtion with parameters which return a values in string
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function and storing the returned value in a variable
var place = city_country("Karachi", "Pakistan");
// Printing the returned value
console.log(place);
