// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {    
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // Implicit scope --> syntax for writing 'if' without curly braces in one line or in multiple lines using ','
//                                                                 but dont use implicit scope for multiple lines since it looks very unreadible 


// if (balance < 500) {                               //nesting if
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true   // Real life use case scenarios
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {    // '&&' And operator both conditions to be true         
                                           // check multiple conditions to evaluate to be true or false in order to allow a user for something to access
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {    // OR operator -> either of the conditon should be true among multiple condtions
    console.log("User logged in");                           // These things are used in conditional rendering for example : when user is  already logged in having server given token then simply change text of login button and show the user  logout button 
}
// These things are used in conditional rendering for example : when user is  already logged in having server given token then simply change text of login button and show the user  logout button 

