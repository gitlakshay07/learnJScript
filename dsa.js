// class Problem - 1

/**
 * Sort the above data based on following rules
 * 1. Based on Age - Ascending Order
 * 2. Alphabatically - A to Z
 */

// const myArr = [{name : "Ajay",age : 18},{name : "Mohit",age : 18},
//     {
//         name : "Vimal",
//         age : 19
//     },
//     {
//         name : "Sheela",
//         age : 19
//     },
//     {
//         name : "Bhavik",
//         age : 18
//     },
//     {
//         name : "Lina",
//         age : 19
//     },
//     {
//         name : "Suraj",
//         age : 18
//     },
//     {
//         name : "Amit",
//         age : 18
//     },
//     {
//         name : "Joseph",
//         age : 17
//     },
//     {
//         name : "Dheeraj",
//         age : 17
//     },
//     {
//         name : "Imran",
//         age : 17
//     }
// ];
// function myFunction(arr) {
//     const ReturnVal = arr.sort((fstObj,lstObj) => {
//      if(fstObj.age === lstObj.age) {
//         return fstObj.name.localeCompare(lstObj.name);
//      } else {
//         return fstObj.age - lstObj.age;
//      }
//     })
//     console.log(ReturnVal);
// }
// myFunction(myArr);

let ageGroupArr = [19, 28, 37, 54];

let myObjArr = {

    19 : [
        {
            name : "Sheela",
            age : 19
        },
        {
             name : "Vimal",
             age : 19
        }
    ],
    28 : [
        {
            name : "Bhavik",
            age : 28
        },
        {
            name : "Amit",
            age : 28
        }
    ],
    37 : [
        {
            name : "Joseph",
            age : 37
        },
        {
            name : "Imran",
            age : 37
        }
    ],
    54 : [
        {
            name : "Lina",
            age : 54
        },
        {
            name : "Suraj",
            age : 54
        }
    ]
}

function mysortedArr(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0 ; j < arr.length - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let sort = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = sort;
            }
        } 
    }
    return arr;
};
console.log(mysortedArr(ageGroupArr));


function sortNameWithAge(objArr) {

    let key = object.keys(objArr);

    for(let i = 0; i < key.length - 1; i++) {
        
    }

}