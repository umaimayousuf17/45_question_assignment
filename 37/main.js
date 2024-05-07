// making a funtion
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " printed on shirt"));
}
// creating a funtion with by-defult values
make_shirt();
// calling a funtion now with medium size and defult message
make_shirt("Medium");
// calling a funtion now with small size and also different print message
make_shirt("Small", "I Love JavaScript");
