                                                             // this is Arrays example

// let marks = [79, 89, 99, 34, 45]; 1git 
// console.log(marks);
// console.log(marks.length);

    // Looping over an Array

// PRint all elements of array 

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];

// for (let idx=0; idx<heroes.length; idx++) {
//     console.log(heroes[idx]);
// }

// for (let hero of heroes) {
//     console.log(hero);
// }

// Q . given some marks data of class find out avg score of class 

// let marks = [85, 97, 44, 77, 86, 60];

// let sum = 0 ;

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// Q . price of some item given offer 10% change the final price 

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

        // method 2

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);

//                 // Method in arrays 

let foodItems = ["tomato", "potato", "apple", "mango", "banana"];

// push => Value push in last 
// foodItems.push("burger", "chips");
// console.log(foodItems);

// pop => delete from end & return
// foodItems.pop();
// console.log(foodItems);

// to string=> convert array to string ! can convert no. to string also !
// console.log(foodItems.toString());
// console.log(foodItems);

// concat => joins multiple Array

// let heroes = ["thor", "spiderman", "ironman"];
// let arr = foodItems.concat(heroes);
// console.log(arr);

// unshift => add to start 
// foodItems.unshift("papapya");
// console.log(foodItems);

// shift => delete from start & return 

// slice => return a piece of array! original change* nhi karta
// console.log(foodItems.slice(1, 3));
// NOTE: 3 is not include (n-1)

// splice => change originall array (add remove replace)

// let arr = [2, 4, 5, 6, 7, 8, 10, 13, 15]

// arr.splice(2, 3, 101,102,103);
// console.log(arr);

// Q . CREATE Array TO STORE COMPANIES 
// 1 REMOVE FIRST COMPANY 
// 2 REMOVER UBER AND ADD OLA
// 3 ADD AMAZON AT THE END 

// let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"]
// console.log(companies.shift());

// companies.splice(2, 1, "ola");
// console.log(companies);

// companies.push("Amazon");
// console.log(companies);