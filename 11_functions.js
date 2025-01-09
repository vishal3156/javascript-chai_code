function addTwoNumbers(number1, number2){               //Parameters = number1, number2
    // console.log(number1 + number2);
}

addTwoNumbers(3, 4);          //Arguments = 3, "4"

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vishal"));

function loginUserMessage2(username = "John"){
    return `${username} just logged in`
}

// console.log(loginUserMessage2());
// console.log(loginUserMessage2("Random"));

const user = {
    name: "Vishal",
    age: 28
}

function returnUserDetails(anyUser){
    return `User name is ${anyUser.name} and age is ${anyUser.age}`
}

// console.log(returnUserDetails(user));

function returnUserDetails2(anyUser){
    return `User name is ${anyUser.name} and age is ${anyUser.age}`
}

// console.log(returnUserDetails2({
//     name: "John", age: 28
// }));

const myNewArray = [100, 200, 500, 1000];

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1000, 5000, 8000]));