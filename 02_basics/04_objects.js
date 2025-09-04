// const tinderUser = new Object() // this is a singleton object
const tinderUser = {} // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {                      // object nesting --> this is how we can create an object within an object 
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // use dot to open object within objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // dont merge like this as it return nested bjects
 // const obj3 = Object.assign({}, obj1, obj2, obj4) //  this method can push one or more source  objects into the target object
// use of {} in this method is to make sure that all the objects should be treated as source  and {} is an empty object(target object) that stores the merged result of all objects  
// if {} is not used then 1st object  by default will be used as target object

const obj3 = {...obj1, ...obj2} // this method can also be used  to merge two objects
// console.log(obj3);


const users = [  // databse returns array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //  returns array of all the keys in once
// console.log(Object.values(tinderUser)); // returns array of all the values in once
// console.log(Object.entries(tinderUser)); //  returns array of all the key-value pairs each in an array individually

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // mehtod to ask if an object has a particular property like 'isLoggedIn'


const course = {                 
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  //  object destructuring({courseInstructor: instructor}) ,enhances readibility same concept is used in react as well

// console.log(courseInstructor);
console.log(instructor);

// {  // when we use fetch method to call api , api fetches result(cab=n be an object or an array) in json format(similar to object but not same)  where keys will always be syntaxwise string , and values will also be string apart from boolean, number type
//   this json result is converted into an object to extract values  
"name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
