/*
const score = 400
console.log(score)

const balance = new balance (100) // explicitly define a number type variable and it produces output along with its typeof
console.log(balance)

console.log(balanace.toString().length)
console.log(balance.toFixed(1)) // toFixed is used to get decimal pricision value


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(2));


const hundreds = 10000000
console.log(hundreds.toLocaleString()) toLocaleString method is used to make a number readable having several zeros 
,thus enhances the visibility of zero by adding commasconsole.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))  add commas according to indian standards*/

//***********Maths*************/

 console.log(Math.abs(-4));
 console.log(Math.round(4.3) );
 console.log(Math.ceil(4.2));
 console.log(Math.floor(4.9));
 console.log(Math.min(4,3,2,6));
 console.log(Math.max(4,3,5,6,7));

 console.log(Math.random()); // by default  random method gives a value between 0  and 1 only

console.log(Math.floor(Math.random()*10 )+ 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()*( max - min + 1))+min)
