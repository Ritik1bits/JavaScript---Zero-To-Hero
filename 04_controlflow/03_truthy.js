// Truthy values are the values  that are assumed to be true  or false  without having compared them
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/* Below are falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN */

/* below are  truthy values
"0", 'false', " ", [], {}, function(){}
 */

/* 
if (userEmail.length === 0) {       // to check if an array is an empty array
    console.log("Array is empty");
}
 */
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {           // to check if an object is an empty object
    console.log("Object is empty");
}

/* 
Important: when the given below values are compared in the following way gives true always :
false == 0
true

false == ''
true

0 == ''
true */

// Nullish Coalescing Operator (??): null , undefined
//Null Coalescing Operator is designed only for 'Null' and 'Undefined'

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false // Terniary operator is used as an alternative to If-else to check two condtitons

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
