
// destructuring
let names = ["rose", "ronald", "laila"];

let [thin, tall, short] = names

console.log(thin)
console.log(tall)
console.log(short)


let placeHoldersNumbers = [9, 30, 47, 20];

let [x, y, z, a] = placeHoldersNumbers
console.log(x)
console.log(y)
console.log(z)
console.log(a)

// for(var i = 0; i<placeHoldersNumbers.length; i++){
//     console.log(placeHoldersNumbers[i])
// }


// destructuring assignment with function
function details(){

    return [2,4,6,8];
}
let [s, q, l, t] = details();
console.log(s)
console.log(q)
console.log(l)
console.log(t)

// destructuring assignment with objects
let personalDetails = {
    personName: "laila",
    country: "uganda",
    job: "developer",
    email: "laila01@gmail.com"
}

let {personName, country, job, email} = personalDetails
console.log(personName)
console.log(country)
console.log(job)
console.log(email)


