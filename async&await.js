                // Callback/Promise/async-await

        // this is async example=> with timeout example also!
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello JS");
// }, 4000);

// console.log("three");

// const hello = () => {
//     console.log("four");
// }
// setTimeout(hello, 3000);

        // callback
// function sum(a,b) {
//     console.log(a + b);
// }
// function calculator(a,b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 5, sum);

        // callbackHell=> due to nesting problem it comes 
// function getData(dataId, getnextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getnextData) {
//             getnextData();
//         }
//     }, 2000);
// }
        // callback hell nesting
// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// })
// this is an example of data output in time delay

        // Promises
// let promise = new Promise ((resolve, reject) => {
//     console.log("i am a promis");
//     resolve("issue resolved");
//     reject("Payment Unsuccessful");
// });

        // Way to runs promise
// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled", res);
// });
// promise.catch((err)=> {
//     console.log("rejected", err);
// });

            // Async-Await
// async function hello () {
//     console.log("hello");
// }
// hello();


// function api() {
//     return new Promise ((resolve, reject)=> {
//         setInterval(() => {
//             console.log("weather data");
//             resolve("succesful");
//         }, 2000);
//     });
// }
// async function getWeatherData() {
//     await api(1);
//     await api(2);
// }


            // Fetch Api
// const URL = "https://cat-fact.herokuapp.com/facts";
// const para = document.querySelector("#facts");
// const button = document.querySelector("#btn");


// const getFacts = async () => {
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response.status);
//     let data = await response.json();
//     para.innerText = data[1].text;
// };

// button.addEventListener("click", getFacts)