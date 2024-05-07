// creating a array
var uesrName = ["Laiba", "Yumna", "Manal", "Hamna", "Ruhma"];
// using foreach loop on array
uesrName.forEach(function (oneUser) {
    if (oneUser === "Hamna") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again"));
    }
});
