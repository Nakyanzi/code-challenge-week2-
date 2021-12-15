
// rest parameters
// function rest(x,y, ...numbers){
//     console.log(numbers)
//     console.log(z)
//     console.log(y)
//     total = 0;

//     for(const n of numbers){
//         total += n
//     }
//     return total;
// }

// const add = rest(2,4,6,6,30)
// console.log(add)

// rest parameters
function rest1(...odds){

    console.log(odds)
}
rest1(40,50,60);

// rest parameter

function rest2(e,d,...eds){
    console.log(eds)
    console.log(e)
    console.log(d)
    let total = 0

    for(let n of eds){
        total +=n
    }
    return  total

}

rest2(4,9,2,8,6)




// export default class User{
//     constructor(name,email){
//         this.name = name
//         this.email = email

//     }
// }


// export function personName(user2){
//     console.log(`your name is ${user2.name}`)
// }

// export function personName(user3){
//     console.log(`your name is ${user2.email}`)
// }