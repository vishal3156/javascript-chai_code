/*************** for *****************/

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(i + " * " + j + " = " + i*j);
    }
}

let myArray = ["flash", "Batman", "Superman"];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break and continue
/*********************** break *****************************/
for (let index = 1; index <= 20; index++) {
   if (index == 5) {
    // console.log(`Detected 5`);
    break;
   }
//    console.log(`still no 5`);
    
}

/************************ continue *************************/

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
    //  console.log(`Detected 5`);
     continue;
    }
    // console.log(`we'will continue after 5`);
     
 }

 /****************************** Do-while *************************/

 let index = 0;
 while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2;
 }

 let myArray2 = ["Spiderman", "Batman", "Captain America"];
 let arr = 0;

 while (arr < myArray2.length) {
    // console.log(`We have got ${myArray2[arr]}`);
    arr = arr + 1;
 }

 let score = 1;

 do {
    // console.log(`Score is ${score}`);
    score++
 } while (score <= 10);

 /************************* array loops ****************************/

// for of

const arr2 = [1, 2, 3, 4, 5]

 for (const num of arr2) {
    // console.log(num);
 }

 const greetings = "Hello World"
 for (const greet of greetings){
    // console.log(greet)
    continue;
 }

 //maps

 const map = new Map()
 map.set("In", "India") 
 map.set("NCR", "Delhi") 
 map.set("DMH", "Madhepura") 
 map.set("In", "India")
 
//  console.log(map);

 for (const [key, value] of map) {
    // console.log(key, ":", value);
 }

const myObject = {
   js: "javascript",
   cpp: "c++",
   rb: "ruby"
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers
                  .map((num) => num * 10)
                  .map((num) => num + 1)
                  .filter((num) => num >= 40)

// console.log(newNums);

// for in

for (const key in myObject) {
   // console.log(`${key} for ${myObject[key]}`);
}

//for each

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (index) {
   // console.log(index);
} )

coding.forEach( (i) => {
   // console.log(i);
} )

function printMe(i) {
   // console.log(i)
}

coding.forEach(printMe)

const myCoding = [
   {
      languageName: "javascript",
      fileName: "js"
   },

   {
      languageName: "java",
      fileName: "java"
   },

   {
      languageName: "python",
      fileName: "py"
   },
]

myCoding.forEach((item) => {
   // console.log(item.fileName, item.languageName);
})

//filter

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num > 4);
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//    return num > 4
// });

// console.log(newNums);

const newNums2 = [];
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myNums.forEach( (num) => {
   if (num > 4) {
      newNums.push(num)
   }
})

// console.log(newNums)

const bookList = [
   {title: "Book1", genre: "Science", publish: 1995, edition: 2025 },
   {title: "Book2", genre: "Fiction", publish: 1996, edition: 2025 },
   {title: "Book3", genre: "Non-Fiction", publish: 1997, edition: 2025 },
   {title: "Book4", genre: "Science", publish: 1998, edition: 2025 },
   {title: "Book5", genre: "Non-Fiction", publish: 1999, edition: 2025 },
]

let userBooks = bookList.filter( (book) => {
   return book.genre === "Science"
})

userBooks = bookList.filter( (book) => {
   return book.genre === "Science" && book.edition === 2025
})

// userBooks = bookList.filter( (book) => book.publish >= 1996)

// console.log(userBooks);

//reduce

const myNums2 = [1, 2, 3]

const myTotal = myNums2.reduce(function (acc, currval) {
   return acc + currval
}, 0)

const myTotal2 = myNums2.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);
console.log(myTotal2);
