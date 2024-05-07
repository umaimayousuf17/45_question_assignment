// cearting a array 5 values
let userNames = ["Manal", "Laiba", "Ruhma", "Yumna", "Hamna"]

// remove all valuse form our array now our array is empty
userNames = []

// if statment for cheching length of our array is empty?
if (userNames.length === 0){
    console.log("you array in empty we need to find some users!")
}else{
    // using foreach loop on array

userNames.forEach(oneUser =>{
    if(oneUser === "Hamna"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again`)
    }
})
}

