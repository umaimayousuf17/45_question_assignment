// Creating a Guest List Arry
let guestlist = ["Ruhma","Usama","Sumama","Shahana"];

//Making variable for those guest who cant come
let donCome = guestlist[0];

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
let middleIndex: number = Math.floor(guestlist.length / 2);

//Adding a new guest to middel index of array
guestlist.splice(middleIndex, 0,"Reeba");


console.log("Updated List of our Guest");

//Sending a invitation message to our guests one by one with thier names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
