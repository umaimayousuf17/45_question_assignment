// Making a aarray of countries and print its orginal order
let countriesToVisit: string[] = ["China","Denmark","Brazil","Argentina"];
console.log("Orginal Order:", countriesToVisit);

// Print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Oder:", [...countriesToVisit].sort());

// Show that the array is still in its orginal order
console.log("Sitll in orginal order:", countriesToVisit);

// print the array in reverse order without modifying  the actual list
console.log("Reverse order:",[...countriesToVisit].reverse());

// Show that the array is still in its orginal order
console.log("Sitll in orginal order:", countriesToVisit);

// we have changed the orginal array order now
console.log("Orginal Array Reversed:", countriesToVisit.reverse());

// print the array to show that its back to its orginal order
console.log("Back to orginal order:", countriesToVisit.reverse());

// print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());

// we have changed again ther orginal array order now in reverse order again
console.log("Orginal Array Reversed Again:", countriesToVisit.reverse());


