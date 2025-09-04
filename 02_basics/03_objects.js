//  There are two ways to declare an object : 
//1-> Using Object Literals 
//2->Using Constructor : when an obj created using constructor it becomes singleton
// Object.create : constructor method to create object

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
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
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
