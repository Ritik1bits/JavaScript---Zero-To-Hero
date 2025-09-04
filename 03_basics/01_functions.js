// function defintion
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()                         // this is how to call and execute a function --> without parenthesis function will only be a refrence 

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers(2,6)                  // arguments are passed during calling a function

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)          // output of return can be stored in a variable while calling func simultaneously as mentioned

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){                                 // within functions in JS empty string("") and 'undefined' is treated as false by dfault
        console.log("PLease enter a username");
        return                                        // no statement can be written immediately after return statement as it is not allowed
    }
    return `${username} just logged in`               // another way to take arguments with return statement 
    //
}

// console.log(loginUserMessage("hitesh"))            //calling func with arguments
//console.log(loginUserMessage())                     // calling func without arguments will return 'undefined' and add it to meeage
//console.log(loginUserMessage(""))                  // return message without argument since it is treated as empty string
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
