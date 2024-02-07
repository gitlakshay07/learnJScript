                                            // Events in Javascript

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked!");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("#box")
// div.onmouseover = () => {
//     console.log("you are inside div");
// };

        // event object => detail about events
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (event) => {
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY);
// };

        // event listner =>to perform multiple function at a time 
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", (event) => {
//     console.log("button was clicked");
//     console.log(event.type);
// });
// const handler2 = () => {
//     console.log("button was clicked - handler-2");
// };
// btn1.addEventListener("click", handler2);
// note=> we have to put callback in variable to make changes in future

        //  to remove event listner
// btn1.removeEventListener("click", handler2);

// practice question => dark/light mode

// let modebtn = document.querySelector("#modebtn");
// let currmode = "light";

// modebtn.addEventListener("click", () => {
//     if(currmode === "light") {
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else {
//         currmode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currmode);
// })