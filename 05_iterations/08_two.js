
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);  // myarr[arr] represents the values of array at [index] 
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`); // in do while loop first computation is done ,then inc/dec,then condition check 
    score++
} while (score <= 10);
