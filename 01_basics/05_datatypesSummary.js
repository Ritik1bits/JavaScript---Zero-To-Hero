//the main difference between primitive and non primitive data types is based 
//on the way they are stored in the memory and the way they are accessed in the memory

//primitive data types --> works on call by value mechanism , means when we copy such data types from one variable to another a copy of original value is passed and changes are reflected only in copied values 
//String , Number , Boolean , null, undefined ,Bigint, Symbol--> is used make a value unique

const score = 100
const scorevalue= 100.8

const isLoggedIn= false

const outsideTemp = null
console.log(typeof outsideTemp, outsideTemp, typeof scorevalue);

let userEmail;
console.log(userEmail)


const id= Symbol('123')
const anotherid = Symbol('123')
console.log(typeof id , typeof anotherid)

console.log(id === anotherid);

const bigNumber = 3338838494990303933n
console.log(bigNumber);

//Reference (Non Primirive )data types --> works on call by reference --> allocated by reference in memory
// Array , Objects , functions  
// return type of array and objects is Object 
//return type of function  is Object Function 

const heros =["shaktiman", "nagraaj","doga"] // array
console.log(heros)
//console.log(typeof heros);

let myObj={
Name: "Ritik",
age : 24,

}
//console.log(typeof myObj);

const myFunction = Function() 
console.log("hello world");
console.log(typeof myFunction)

console.log(typeof bigNumber)