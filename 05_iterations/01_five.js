const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){        // ye callback fn array ke ander chal ra hai // function used in this 'forEach' loop is 'callbackfn'  , this fn does not take any name , this loop is so that that it will go to each value of array on ehich it is applied.
//     console.log(val);                   // forEach is drectly injected to this array
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)       // on refence of fn is passed and it wille execute itself

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [           //Important : this is most common operation(loop on array of objects) when values are fetched from databases
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);  // har iteration mei item object ko refer krta hai  therefore ,item alone here refers to each  object so to acces values use keys
} )
