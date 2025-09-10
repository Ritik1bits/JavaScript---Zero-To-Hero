const myNums = [1, 2, 3]
//Reduce Method

// const myTotal = myNums.reduce(function (acc, currval) {      //application in shopping cart like usecases
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)     //same operation using arrow function

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// Reduce method is most commonly used to add values of array or objects like in case of shopping cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)  // addition of price in shopping cart

console.log(priceToPay);
