let a = 200;

{
    let a = 10;
    // console.log("Block Scope: ", a);
}

// console.log("Global Scope: ", a);

function one(){
    const username = "Vishal";

    function two(){
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if(true){
    const username = "hitesh";
    if(username === "hitesh"){
        const website = " youtube";
        // console.log(username + website);
    }
}

/**************************************** interesting *********************************************/

// console.log(addTwo(5));     //output = 6

function addOne(num){
    return num + 1;
}

// console.log(addTwo(5));     //output = error

const addTwo = function(num){
    return num + 2;
}

/****************************************** this ******************************************/
const user = {
    username: "vishal",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage();

/*************************************** arrow function ***************************************/

const chai = () => {
    // console.log("Arrow function");
}

// chai();

const addTwo2 = (num1, num2) => {
    return num1 + num2;                 //explicit return
}

// console.log(addTwo(5, 7));

const addTwo3 = (num1, num2) => num1 + num2;           //implicit return
// console.log(addTwo3(5, 5));

const addTwo4 = (num1, num2) => (num1 + num2);
// console.log(addTwo3(5, 6));

const username2 = (obj) => ({username: "Vishal"});
// console.log(username2(user));


/******************* IIFE - Immediately Invoked Function Expressions *****************/
// IIFE is used to prevent global scope pollution.
// Always use ; at the end of IIFE

(function chai(){
    // console.log("DB Connected");        //named IIFE
})();

( (name) => {
    // console.log(`${name}`);             //arrow IIFE
})("Vishal");

