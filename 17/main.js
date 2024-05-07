// Creating a Guest List Arry
var guestlist = ["Ruhma", "Usama", "Sumama", "Shahana"];
//Making variable for those guest who cant come
var donCome = guestlist[0];
//Print the name of guest who cant come
console.log(donCome, "Nahi Ahh Sakty Ha");
//Add or remove values form guest list array
guestlist.splice(0, 1, "Samaima");
//Message print for bigger table
console.log("Good News ! we have found a bigger tabele for dinner.");
//Adding a new value at starting index of array
guestlist.unshift("Hamna");
//Adding a new value at ending index of array
guestlist.push("Zain");
//Get a middle index of our guest list array
var middleIndex = Math.floor(guestlist.length / 2);
//Adding a new guest to middel index of array
guestlist.splice(middleIndex, 0, "Reeba");
console.log("Updated List of our Guest");
//Sending a invitation message to our guests one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite tow guests tp dinner with me");
// Using while-loop to remove guests form the array until only two names remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Printning a invitation to the last two guest on the list
console.log("Invitation to the last 2 Guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two guest form the list
guestlist.pop();
guestlist.pop();
console.log("Empty list:", guestlist);
