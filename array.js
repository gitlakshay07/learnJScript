                                                     // this is Arrays example

// let marks = [79, 89, 99, 34, 45]; 
// console.log(marks);
// console.log(marks.length);

    // Looping over an Array

// // PRint all elements of array 

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
// console.log(sum);
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

        // method3 => forEach!

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//         txt += value + "\n" ; 
// }
// myFunction();
// console.log(txt);
// NOTE: can write only value also

        // method4 => map!

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//         return value * 2;
// }
// NOTE:The map() method does not change the original array.

        // flatmap! => The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);
// console.log(newArr);

        // filter => The filter() method creates a new array with array elements that pass a test.

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//         return value > 18;
// };
// console.log(over18);

        //Reduce!

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//         return total + value;
// };
// console.log(sum);
// NOTE: can write only value&total also

                   // Method in arrays 

// let foodItems = ["tomato", "potato", "apple", "mango", "banana"];

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

        // Search in Array

// const number = [4, 8, 6, 7, 8, 9];

// const contain = number.includes(5);
// console.log(contain);

// const containfour = number.indexOf(6) >= -1 ;
// console.log(containfour);

// const evenum = number.find(val => {
//     return val % 3 === 0;
// });

// console.log(evenum);

// const evennum = number.findIndex(val => val % 2 === 0);

// console.log(evennum);

// findLast();
// findlastindex();

            // Sort in Array

// const alparr = ["a", "o", "i", "e", "u"];
// console.log(alparr.sort());

// NOTE:By combining sort() and reverse(), you can sort an array in descending order:
// NOTE:toSorted()/toReversed() method as a safe way to sort an array without altering the original array.
// NOTE:cars.sort(function(a, b){return a.year - b.year});

// const num = [1, 5, 8, 7, 9, 10];
// const arrnum = num.sort((a,b) => {
//     return a - b;
// });
// console.log(arrnum);

// NOTE: swiping method come under this condition 1-5compare then will swipe!
// (a.objectitem - b.objectitem) can do for objects also!
// if want in desending order do (b - a)

            // ITTERATION IN ARRAY
            
// let num = [1, 5, 8, 7, 9, 10];
// let iter = num[Symbol.iterator]();

// console.log(iter.next());
// iter.next();
// console.log(iter.next().value);
// console.log(iter.next().done);

// NOTE:done-false since more array are there if no more array then true

