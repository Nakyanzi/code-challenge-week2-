// spread operator

// joining arrays
let schools = ["books", "pens", "pencils"];
let subjects = ["english", "math", ...schools];
console.log(subjects)

// copying array
 let colours = ["red", "yellow", "pink"]
 let clearColours = [...colours];
 console.log(clearColours);

//  joining 2 arrays

let evenNumbers = [6, 12, 16, 10, 20];
let oddNumbers = [3, 5, 9,]
let combined = [...oddNumbers, ...evenNumbers];
console.log(combined);