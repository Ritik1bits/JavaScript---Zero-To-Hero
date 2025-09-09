//objects can be iterated using 'for in' loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {            // for in loop to get keys and objects together
    //console.log(key)                   // gives only keys
    
    //console.log(`${key} shortcut is for ${myObject[key]}`);  // gives both keys and values
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()  // maps are not iterable using for in loop
// map.set('IN', "India") 
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
