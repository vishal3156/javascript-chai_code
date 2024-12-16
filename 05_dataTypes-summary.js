/*
    Primitive datatypes:-
        1. String const name = "Name";
        2. Number const num = 2;
        3. Null const outsideTemp = null;
        4. Boolean const isloggedIn = false;
        5. undefined const letUser;
        6. Symbol const id = symbol('123');
        7. BigInt const bigNumber = 345628645738n;

    Reference Type / Non-primitive datatypes:
        1. Array const heros = ["shaktiman", "naagraj", "doga"];
        2. Objects let myObj = {name: "me", age: 27,};
        3. Functions const myFunction = function (){ console.log("Hello, World!")}
*/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
    Stack memory -> Primitive
    Heap memory -> Non-Primitive
*/

let myName = "Vishal Suman";
let myChangedName = myName;
myChangedName = "Vishal";

console.log(myChangedName);
console.log(myName);

let unitOne = {
    name: "Player-One",
    rank: 1
}

let unitTwo = unitOne;

unitTwo.rank = 2;

console.log(unitOne)
console.log(unitTwo)