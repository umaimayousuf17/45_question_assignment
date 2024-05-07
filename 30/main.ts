// creating a array
let uesrName = ["Laiba", "Yumna", "Manal", "Hamna", "Ruhma"];

// using foreach loop on array

uesrName.forEach(oneUser =>{
    if(oneUser === "Hamna"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again`)
    }
})