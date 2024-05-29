const name = " Ritik" /// strings are zero indexed in javascript
const repoCount = 50 

console.log (name+repoCount+"Value");

//modern concatenation method
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('hitesh-hc')
console.log(gameName.length)
console.log(gameName[3]);

console.log(gameName.__proto__); // returns an empty  object {}
console.log(gameName.toUpperCase(gameName));// it did not changeed the original value but a copied value due to call bye value method
 console.log(gameName.charAt(4));
 console.log(gameName.indexOf('t'));
 console.log(gameName.substring(8, 4)); // does not obey negative values as in slics , substring method is used to return a range of specific characters of any string 
console.log(gameName.slice(-8,4)); // slice method can take negative values as well


const newString = ("    ritik-ojha  ")
console.log(newString);
console.log(newString.trim()); // trim is mainly used to avoid or remove or trim  whitespaces from both ends of  a string 
// trim method works on white spaces  plus line terminatora '\n'

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log (url.includes('sunder'))

console.log(newString.split('-'));