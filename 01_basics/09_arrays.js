/**************** arrays ****************/

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Batman", "Superman", "Spiderman"];

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr2[2]);          //output = 3

/*********************** methods *****************************/

myArr.push(6);
// console.log(myArr);              //output = [0, 1, 2, 3, 4, 5, 6]

myArr.pop();
// console.log(myArr);              //output = [0, 1, 2, 3, 4, 5]

myArr.unshift(9);
// console.log(myArr);              //output = [ 9, 0, 1, 2, 3, 4, 5]

myArr.shift();
// console.log(myArr);              //output = [ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(5));     //output = true
// console.log(myArr.indexOf(5));      //output = 5

const newArr = myArr.join();
// console.log(newArr);                //output = 0,1,2,3,4,5

// console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1,3,9);
// console.log(myn2);
// console.log("C ", myArr);

const marHeroes = ["Thor", "Ironamn", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];
const indianHeroes = ["Shaktiman", "Hanuman", "Nagraaj"]

// marHeroes.push(dcHeroes);
// console.log(marHeroes);                //output = [ 'Thor', 'Ironamn', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marHeroes[3][1]);          //output = Flash

// const allHeroes = marHeroes.concat(dcHeroes);
// console.log(allHeroes);                   //output = [ 'Thor', 'Ironamn', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// const allNewHeroes = [...marHeroes, ...dcHeroes];
// console.log(allNewHeroes);              //output = [ 'Thor', 'Ironamn', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const merged_array = another_array.flat(Infinity);
// console.log(merged_array);              //output = [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// 
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //output = [ 100, 200, 300 ]