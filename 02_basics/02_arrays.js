const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);// when one array is pushed into another array , 
//the entire pushed array acts as the last element and to access the element fron it use the syntax given  

// const allHeros = marvel_heros.concat(dc_heros)//merge two arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // Use this method only --> Spread Operator(...[Array],...[Array]) , used to merge  two or more arrays and returns a new array.
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)// flat method is used to concatenate all subarrays(nested arrays) into one single array
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))// method to ask if the value is array type if not
console.log(Array.from("Hitesh"))// then use this mehtod to convert the obtained value to array type
console.log(Array.from({name: "hitesh"})) // interesting case for interview, we have to mention when passed valued is an object whether we want array either from keys or value 
//otherwise it returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // 'of' use this method to convert multiple variables or set of values into arrays
