                                                    // classes & Object
// const student = {
//     fullName : "LAKSHAY VIMALL",
//     marks : 94.3,
//     printMarks : function () {
//         console.log("marks = ", this.marks);
//     },
// };

                        // to make prototype
// const employee = {
//     calcTax() {
//         console.log("tax rete is 10%");
//     },
// };

// const karanArjun = {
//     salary : 50000,
// };
// const karanArjun2 = {
//     salary : 90000,
// };
// const karanArjun3 = {
//     salary : 55000,
// };

// // to make prototype 
// karanArjun.__proto__=employee;
// karanArjun2.__proto__=employee;
// karanArjun3.__proto__=employee;

                        // classes in js
// class ToyotoCar {
//     constructor() {
//         console.log("creating a new object");
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand) {
//         this.brandName = brand;
//     }
//     setMilage(milage) {
//         this.milage = milage;
//     }
// }
// let fortuner = new ToyotoCar();
// fortuner.setBrand("fortuner");
// fortuner.setMilage(10)

// let Sumo = new ToyotoCar();
// Sumo.setBrand("toyota");
// Sumo.setMilage(15)

// console.log(fortuner);
// console.log(Sumo);

// Inheritance in JS  => class 1 ki property lo class 2 ma use karna ka liya 
// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}
// let obj = new Child();

                    // Super constructor
// class Parent {
//     constructor() {
//         this.species = "Homo Sapiens"
//     }
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {
//     constructor(trait) {
//         super();
//         this.trait = trait;
//     }
// }
// let child = new Child("descent");

// Practice class & objects
// Q . Website of cllege creat class  user with name & email ! also has method called viewdata() that allow user to view website data 
// Q . creat new class cld admin which inherits from user. add new methd cld editdata to admin aloow ti edit website data

// let data = "secret information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ", data);
//     }
// }

// class admin extends User {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editdata() {
//         data = "Some new value";
//     }
// }
// let student1 = new User("lakshay","lakshay@gmail.com");

// let student2 = new User("akshay","akshay@gmail.com");

// let teacher = new admin("teacher","teacher@gmail.com");

            // Error handling in Js => if doubt in codde will have error
// let a = 15;
// let b = 20;
// try {
//     console.log("a+b =", a + c);
// }catch(err) {
//     console.log(err);
// }