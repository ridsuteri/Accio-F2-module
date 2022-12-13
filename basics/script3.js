// aam zindagi 
// let name =  "Rahul";
// let age = 20;
// let city =  "Mumbai";
// let hobbies = ["coding", "gaming", "reading"]


// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.unshift(0);

// arr.shift()
// arr.splice(2, 1);

// // better way to do this (mentos way)
// let object = {
//     name: "Rahul",
//     age: 20,
//     city: "Mumbai",
//     hobbies: ["coding", "gaming", "reading"],
//     abc: function () {
//         // statemt
//     }
// }

// object.abc();

// // function declartion
// function abc() {
//     // statemt
// }
// // expression
// let abc = function () {

// }

// // arrow function
// let abc = () => {

// }

// function a() {
//     b();
// }
let arr = [
    { fname: "Rahul", module: "f4", score: 30 },
    { fname: "Riddhi", module: "f2", score: 100 },
    { fname: "Ram", module: "f1", score: 90 },
    { fname: "Akbar", module: "f3", score: 101 },
    { fname: "Amar", module: "f4", score: 20 },
];

// arr.push()

// for(int i = 0; i < arr.length; i++){
//     arr[i];
// }

// in java
// for(let i in arr){
//     system.out.println(i);
// }
// console.log(arr);
let sum = 0;
arr.forEach(function (element) {
    console.log("Current element " + element.fname);
})

// let arr2 = [1, 23, 22, 80, 30, 3, 2, 30, 10, 30];
// // arr.splice(starting index, number of elements to be deleted)

// for(let i = 0; i < arr2.length; i++){
//     if(arr2[i] == 30){
//         arr2.splice(i,1);
//         // remove the current element
//     }
// }
// // let index = arr2.indexOf(30);
// // arr2.splice(index, 1);
// console.log(arr2);