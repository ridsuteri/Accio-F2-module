// let arr = [10, 20, 30, 40, 80, 90, 100];
let arr = [{ value: 10 }, { value: 20 }, { value: 30 }];

// reading from the array
// console.log(arr[5])

// pushing/adding an element to the array
// arr.push(100);
// arr.unshift(200);
// console.log(arr);

// removing an element from the array
// arr.pop();
// arr.shift();
// arr.shift();
// console.log(arr);

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// let [a,b,c] = arr;

// spread operator
let arr2 = ['a', 'b', 'c'];
// what i want to do is merge both the arrays into new array
let arr3 = [arr, arr2] // [[10,20,30],[a,b,c]]  //not what i wanted

arr3 = [...arr, ...arr2] // [10,20,30,a,b,c]



// higher order functions

// iteration over the array
// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     arr[i] = arr[i] * 2;
// }

// forEach function
// let result = arr.forEach((item)=>{
//     let number = item*2;
//     console.log(number)
//     return number;
// });

// console.log(result);

// map function
// let result = arr.map((item) => {
//         item = item * 2;
//         return item;

// });

// simplest way of writing a map function
// let result = arr.map(item => item * 2);


// filter function 
// let result = arr.filter((item) => {
//        if(item > 50){
//         return item;
// }
// });

// simplest way of writing a filter function
// let result = arr.filter(item => item > 50);



// reduce function

// let result = arr.reduce((accumulator, item)=>{
//     accumulator = accumulator + item;
//     return accumulator;
// },0)


// let result = arr.includes(10)
// find function
// let result = arr.find((item)=>{
//     return item.value == 100;
// })

// console.log(result);

// console.log(arr);

let students = [{ name: "A", age: "18", marks: 40 }, { name: "B", age: "19", marks: 90 }, { name: "C", age: "20", marks: 100 }, { name: "D", age: "21", marks: 70 }, { name: "E", age: "22", marks: 60 }];

// iterate over all the students and change their age to int type
// let modifiedStudents = students.map((item)=>{
//     item.age = Number(item.age);
//     return item;
// })

// let button = document.getElementById('button');
// button.onclick;

// document.getElementById('button').onclick

// students.map((item)=>{
//     item.age = Number(item.age);
//     return item;
// }).filter((item)=>{
//     return item.marks < 50;
// })

// let overallMarks = modifiedStudents.reduce((sum, item)=>{
//     sum = sum + item.marks;
//     return sum;
// },0);

// return the total marks for students with marks greater than 60 and considering that 20 marks were given to those who had less than 40 marks.

// let graceMarkedStudents = students.map((item) => {
//     if (item.marks <= 40) {
//         item.marks = item.marks + 20;
//     }
//     return item;
// })

// // console.log(graceMarkedStudents)
// let topperStudents = graceMarkedStudents.filter((item) => {
//     if (item.marks >= 60) {
//         return item;
//     }
// })

// let topperMarks = topperStudents.reduce((sum, item) => {
//     sum = sum + item.marks;
//     return sum;
// }, 0)

// console.log(topperMarks);

let finalMarks = students.map((item) => {
    if (item.marks <= 40) {
        item.marks = item.marks + 20;
    }
    return item;
}).filter((item) => {
    if (item.marks >= 60) {
        return item;
    }
}).reduce((sum, item) => {
    sum = sum + item.marks;
    return sum;
}, 0)

console.log(finalMarks);



// console.log(overallMarks);