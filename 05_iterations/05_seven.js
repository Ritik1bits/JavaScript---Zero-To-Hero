const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  


// same operations can also be done using forEach
// const newNums = myNumers.map( (num) =>  num + 10)

//Or
// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers                              //chaining of map
                .map((num) => num * 10 )        // in chaining of map the result of 1st map operation is passed to successive map operations
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)      // filter matlab jo true hoga bahi pass hoga  becoz filter operates on True/false

console.log(newNums);
