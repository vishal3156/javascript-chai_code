// Singleton

// Object literals

// Object.create

const mysym = Symbol("key1");

const Jsuser = {
    name: "Vishal",
    [mysym] : "mykey1",
    age: 27,
    location: "Madhepura",
    email: "johndoe@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);          //output = johndoe@email.com
// console.log(Jsuser["email"]);       //output = johndoe@email.com
// console.log(Jsuser[mysym]);         //output = mykey1

Jsuser.email = "john@email.com";
// console.log(Jsuser);

// Object.freeze(Jsuser);

Jsuser.email = "johndoe@email.com";
// console.log(Jsuser);

Jsuser.greeting = function(){
    // console.log(`Hello, ${this.name}!`);    // always access objects using dot(.)
}

// console.log(Jsuser.greeting());

const regularUser = {
    email: "someone@email.com",
    fullname:{
        userfullname:{
            firstname: "John",
            lastname: "Doe"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const tinderUser = new Object()     //singelton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3);       //Object.assign(target, source)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

/*                              destructuring                                   */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course;
const {courseInstructor: instructor} = course;
console.log(courseInstructor);
console.log(instructor);