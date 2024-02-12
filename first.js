                // This is data type example
// const student = {
//     fullName : "lakshay vimal",
//     age : 27,
//     isPass : true,
//     NoOfAttempt : 2,
// };
// console.log(student);

// for perticular consoles!
// console.log(student["age"]);

                // Symbol

// const sym1 = Symbol();
// const sym2 = Symbol("foo");
// const sym3 = Symbol("foo");

// console.log(Symbol("foo") === Symbol("foo"));

// The above code creates three new Symbols. Note that Symbol("foo") does not coerce the string "foo" into a Symbol. It creates a new Symbol each time:

                        // Advance topic

// closure => function along with its scope!

// global scope 
// function makeFun() {
//     var name = "Mozilla";
        //   inner scope 2 or outer scope
//     return function displayName() {
        // inner scope 
//         console.log(name);
//     }
// }
// var myFunc = makeFun();
// myFunc();

// Hoisting => access peramter before initializing or call function before initialize!

// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName() {
//     console.log("Namaste JavaScript");
// }

// USE STRICT => to strictly check the code 

// a = 10;
// function test() {
//     "use strict";
//     b = 20;
//     console.log(b);
// }
// console.log(a);
// test();

//Note: use var let const at a/b 