// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Promise One is resolved');
//         resolve('Promise One is resolved');
//     }, 1000);
// });

// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// });

/****************** 2nd method *******************/

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // console.log("Async requested");
//         resolve();
//     } ,1000)
// }).then(function(){
//     // console.log("Promise resolved");
// })

/****************** 3rd method *******************/

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({user:"Vishal", email: "john@example.com"})
//     }, 1000);
// }).then(function(user){
//     console.log(user);
// })

/******************* 4th method ******************/

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({user: "Vishal", email:"john@example.com"})
//         } else {
//             reject("Error")
//         }
//      } ,1000)
// })
// .then(function(user){
//     return user.email;
// })
// .then((email) => {
//     console.log(email);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("Promises has been made");
// })

/******************* 5th method ****************/

// `const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username: "Vishal", email: "john@example.com", password: "123"});
//             // console.log("Vishal");
//         } else {
//             reject("Error");
//         }
//     } ,1000);
// });

// async function consumePromise() {
//     try {
//         const response = await promise;
//         console.log(response.username, response.email, response.password);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise();

/********************* 6th method ***********************/

// async function getAllUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);    
})
.catch((error) => {
    console.log(error); 
})