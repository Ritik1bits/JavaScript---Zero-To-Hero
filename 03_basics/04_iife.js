// Immediately Invoked Function Expressions (IIFE)

//iife is designed to immediately execute a file as soon as application starts.
//iife is written to avoid polluation caused due to global scope variables so we write a separate scope. 


// named IIFE
(function chai(){               //syntax of iife
    
    console.log(`DB CONNECTED`);
})();  // an explicit  semicolon in iife is must because it terminates the current context 

( (name) => {                          //iife can also be written as arrow fn
    console.log(`DB CONNECTED TWO ${name}`);  // we can also expect a variable here like {name} and pass it
} )('hitesh')            //   passing argument and executing fn


// Interview questions from iife:
// write a named iife 
// write an unnamed//simple iife
// write an iife using arrow function
// write two iife together.
