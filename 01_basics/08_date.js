/****************** Date *****************/

let myDate = new Date();                    //object
// console.log(myDate.toString());             //Mon Dec 16 2024 08:50:11 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());         //Mon Dec 16 2024
// console.log(myDate.toLocaleString());       //12/16/2024, 8:50:11 AM
// console.log(myDate.getMonth() + 1);            //12
// console.log(myDate.getDay());                  //1
const weekdays = myDate.toLocaleString('Default', {
    weekday: "long"
}) 
console.log(weekdays);


let customDate = new Date(2024, 11, 16);
// console.log(customDate.toDateString());     //Mon Dec 16 2024

let myTimeStamp = Date.now();

// console.log(myTimeStamp);                      //output in miliseconds
// console.log(customDate.getTime());
// console.log(Math.floor(Date.now()/1000));      //output in seconds