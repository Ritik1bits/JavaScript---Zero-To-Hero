//var c = 300 // var does not obey scope mechanism
let a = 300 // varible with global scope can be used & accessed in any part of program 
if (true) {        //block scope can only be used within the block .
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  
    
}
 // global scope of node environment is different then that of window(browsweor console) scope
//closure is a technique
// DOM --> how HTML web page is manipulated using javascript

// console.log(a);  
// console.log(b);
// console.log(c);


function one(){                        //     nested scope
    const username = "hitesh"

    function two(){
        const website = "youtube"                   // in nested scope of functions Child or inner function can access the variables of parent function
                                                 //      but parent function cant access the variables of child functions
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//1st way to dclare a function
console.log(addone(5))  // no error becoz  function is declared directly using keyword instead variable.

function addone(num){
    return num + 1
}


//2nd way to declare a function
//addTwo(5)                   // error becoz addTwo() is  being used before its intialaization  since function is declared using a varieable .
const addTwo = function(num){
    return num + 2
}
