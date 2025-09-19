// Immediately Invoked Function Expressions (IIFE)

//iife is designed to immediately execute a file as soon as application starts.
//iife is written to avoid polluation caused due to global scope variables so we write a separate scope. 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
