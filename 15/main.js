var guestlist = ["Ruhma", "Usama", "Sumama", "Shahana"];
var dontCom = guestlist[0];
console.log(dontCom, "Nahi Ahh Sakta");
guestlist.splice(0, 1, "Samaima");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would u like to dinner withj me?")); });
