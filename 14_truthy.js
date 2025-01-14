// const userEmail = "vishal@email.com";

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("User not found");
    
// }

// const userEmail2 = "";

// if (userEmail2) {
//     console.log("Got user email");
// } else {
//     console.log("User not found");
// }


/****************** falsy values *************************/

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

/****************** truthy values ************************/

// true, "0", "false", " ", [], {}, function(){}

// const array = [0, 1];

// if(array.length === 0){
//     console.log("array is empty");
// }

// const emptyObj = {name: "vishal"};

// if(Object.keys(emptyObj).length === 0){         //Object.keys(emptyobj) returns array
//     console.log("object is empty");
// }

/************** Nullish Coalescing Operator (??): null undefined *************/

let val1;
val1 = 5 ?? 10;
val2 = null ?? 15;
val3 = undefined ?? 20;
val4 = null ?? 5 ?? 25;

// console.log(val1);      // 5
// console.log(val2);      // 15
// console.log(val3);      // 20
// console.log(val4);      // 5

/********************** Ternary operator **********************/

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");