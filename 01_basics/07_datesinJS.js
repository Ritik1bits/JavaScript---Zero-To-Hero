// 

let myDate = new Date() // Date is an object in JS
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // month starts from 0 in JS  
//but in MM--DD-YY format of date month starts from 1
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") // to get date in YY-DD-MM format 
let myCreatedDate = new Date("01-14-2023")// To get date in MM-DD-YY format 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // useful to see exact time in poles .

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
