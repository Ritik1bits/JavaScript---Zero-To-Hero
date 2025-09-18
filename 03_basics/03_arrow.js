const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this keyword is used to refer to current context.
        console.log(this);
    }
     
}

// user.welcomeMessage()
// user.username = "sam" // current context changed from hitesh to sam
// user.welcomeMessage()

// console.log(this); // returning an empty object

// global object in browser is window object

//      function chai(){
//     let username = "hitesh"
//     console.log(this);// returns what 'this' contains like  global values like browswer
//     console.log(this.username); // the mechanism of (CURRENT CONTEXT) using 'this' keyword does not work in  function , it works in objects
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // returns undefined  since mechanism of 'this' keyword does not work in this type of  function too
// }

const chai =  () => { // Arrow function  syntax
    let username = "hitesh"
       // console.log(this.username)            // returns undefined , this does not work with arrow function as well
          console.log(this);                    // returns empty object  // interview question
}


// chai()

// const addTwo = (num1, num2) => {     // basic arrow func syntac
//     return num1 + num2                 // return statement will be used in arrow functions only when curly braces are explicitly used 
// }

// const addTwo = (num1, num2) =>  num1 + num2   //another way of writing  Arrow functions is implicit return where we dont use return statement

// const addTwo = (num1, num2) => ( num1 + num2 ) // same as above 

const addTwo = (num1, num2) => ({username: "hitesh"}) // syntax used (both curly and round braces will be used ) to return object in an arrow function
//console.log(addTwo(3, 4))
const addTwo = () => ({username: "hitesh"})  // this too returns an object
//console.log(addTwo())




// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
