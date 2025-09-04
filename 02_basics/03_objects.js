//  There are two ways to declare an object : 
//1-> Using Object Literals 
//2->Using Constructor : when an obj created using constructor it becomes singleton
// Object.create : constructor method to create object

// object literals

const mySym = Symbol("key1") // 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // symbols are used as keys with square notation to actually behave as symbol and to maintain its return type, but  without square notation symbols are by default treated as string which means then symbols dont behave uniquely.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


//Ways to access an object keys:
// console.log(JsUser.email)// using dot notation is used  -> when keys are by default treated as string(without double quatation) in objects,so we use dot notation to access keys
// console.log(JsUser["email"])// using square notation is used  -> when keys are explicitly defined as strings using double quatation in objects
// console.log(JsUser["full name"])// this key cant be accessed by dot notation since square notation asks to mention keys as strings(with double quotation)
// console.log(JsUser[mySym]) // symbols are too accessed using square notation 

JsUser.email = "hitesh@chatgpt.com"// this is how to overwrite any predefined value
// Object.freeze(JsUser) // use freeze method on object to lock the values
JsUser.email = "hitesh@microsoft.com"// cant be overwritten now since objects is freezed in the previous step
// console.log(JsUser);

JsUser.greeting = function(){ // function are treated normally within objects 
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // if we use greeting method here without parenthesis then it returns only  a refrence of function and does not execute function 
console.log(JsUser.greetingTwo());
