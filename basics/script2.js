// type conversion (explicity converting the data types)
let a = '1';
let b = 2;
// console.log(typeof String(b));
// console.log(typeof Number(a));

// type coercion (implicitly/automatically converting the data types)
let x = 'one';
let y = 1;

// console.log(x-y);


// while loop
let i = 1;
// while(conditon){
//     // body of the function

//     // updation of the iterator variable
// }


// entry controlled loop
while (i <= 10) {
    // console.log(i);
    i++;
}

// do while loop (exit control loop)
// do{
// body of the function
//  updation of the iterator variable
// }while(condition);

let j = 1;
do {
    // console.log(j);
    j++;
} while (j <= 10);


// for loop
// for(initilization; condition; updation){
// body of the function
// }
// function fun1() {
//     for (let k = 1; k <= 10; k++) {
//         if (k == 5) {
//             continue;
//         }
//         console.log(k);
//     }
//     console.log("hello");
//     return;
// }

// 1. function declaration
// function greet(name) {
//     console.log(name);
//     console.log("Hello world");
//     console.log("How are you ?")
//     console.log("I am your persnonal assistant ?")
//     console.log("Help me out with your name ...")

//     return "Mr. " + name;
// }


// 2. function expression

// let xyz = function (name){
//     console.log(name);
//     console.log("Hello world");
//     console.log("How are you ?")
//     console.log("I am your persnonal assistant ?")
//     console.log("Help me out with your name ...")
//     return "Mr. " + name;
// }

// xyz()

// arrays in js

let arr = [1, 2, 3, 4, 'abc', true, null, true];
arr[0];
// let arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// arr[4] = 100;
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);


// arr.push('hello');
// console.log(arr[8]);
// console.log("Returned from pop", arr.pop());
// console.log(arr[8]);
// console.log()


// Strings in js
// let fname = "Riddhi";
// not a good way to populate a string with variables
// let s = 'Hello my name is ' + fname + ' I am a string';

// good way is using string templating
// let s = `Hello my name is ${fname}. I am a string`;
// console.log(s);

// objects
// let obj = {
//     key:value,
//     key2:value2,
// }

let obj = {
    fname: "Riddhi",
    lname: "Suteri",
    favFood: "Pizza",

    teach: function () {
        console.log("Teaching JS")
    },
    develop: function () {
        console.log("Developing JS")
    }
}

console.log(teach());