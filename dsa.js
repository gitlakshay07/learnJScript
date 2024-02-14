// class Problem 

/**
 * Sort the above data based on following rules
 * 1. Based on Age - Ascending Order
 * 2. Alphabatically - A to Z
 */

const myArr = [{name : "Ajay",age : 18},{name : "Mohit",age : 18},
    {
        name : "Vimal",
        age : 19
    },
    {
        name : "Sheela",
        age : 19
    },
    {
        name : "Bhavik",
        age : 18
    },
    {
        name : "Lina",
        age : 19
    },
    {
        name : "Suraj",
        age : 18
    },
    {
        name : "Amit",
        age : 18
    },
    {
        name : "Joseph",
        age : 17
    },
    {
        name : "Dheeraj",
        age : 17
    },
    {
        name : "Imran",
        age : 17
    }
];
function myFunction(arr) {
    const ReturnVal = arr.sort((fstObj,lstObj) => {
     if(fstObj.age === lstObj.age) {
        return fstObj.name.localeCompare(lstObj.name)
     } else {
        return fstObj.age - lstObj.age
     }
    })
    console.log(ReturnVal);
}
myFunction(myArr);