let guestlist = ["Ruhma","Usama","Sumama","Shahana"];

let dontCom = guestlist[0];

console.log(dontCom, "Nahi Ahh Sakta");

guestlist.splice(0, 1, "Samaima");

guestlist.forEach(guest => console.log(`Salam ${guest}, would u like to dinner withj me?`));