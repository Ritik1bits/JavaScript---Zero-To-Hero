// Looping on arrays and objects is very common usseful so focus on it , for arrays there are array specific loops know them

// for of loop :

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  // For of loop syntax where num(same as index) is iterator and object is like array or anything on which we have to runn loop
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps  --> similar to arrays but not same , map holds only  unique values like key value pairs

const map = new Map()            //syntax  for map
map.set('IN', "India")             //syntax to insert values in map
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
or (const key of map) {    // using key as iterator gives all map values
    // console.log(key);
}


for (const [key, value] of map) {      //This is basically array destructuring
                                       // use [key, value] notation to get key values separately
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {   // objects are not iteratable using 'for of'
//     console.log(key, ':-', value);
    
// }
