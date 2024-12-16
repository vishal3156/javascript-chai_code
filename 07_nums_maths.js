const num = 100;
const score = new Number(100);

// console.log(num);
// console.log(score);
// console.log(score.toFixed(2));

const decimal = 123.8655;
// console.log(decimal.toPrecision(4));

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));


/********************* MAths ***************************/

// console.log(Math.abs(-4));          //output = 4
// console.log(Math.round(4.2));       //output = 4
// console.log(Math.round(4.6));       //output = 5
// console.log(Math.ceil(4.2));        //output = 5
// console.log(Math.floor(4.9));       //output = 4
// console.log(Math.min(4, 3, 6, 8));  //output = 3
// console.log(Math.max(4, 3, 6, 8));  //output = 8

console.log(Math.random());
console.log((Math.random() * 10) + 1);  //output = > 0
console.log(Math.floor(Math.random() * 10) + 1); //output = non-decimal > 0

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //output = 10 or above
