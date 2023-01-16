// object literal

// let o = new Object({ name: "John", age: 20 }); // this is the same as the object literal below
// factory function to create objects 
// naming convention of the function is camelCase
function createStudent(fname, rollno, marks, grade) {
    return {
        // properties
        fname, // fname: fname
        rollno,
        marks,
        grade,

        // methods
        getDetails: function () {
            console.log("Data here");
        }
    }
}


// using a constructor function
function Student(fname, rollno, marks, grade, getDetails) {
    this.fname + fname;
    this.rollno = rollno;
    this.marks = marks;
    this.grade = grade;
    this.getDetails = function getDetails() {
        console.log("Data here");
    }
}

// students created using factory functions
let st1 = createStudent("John", 1, 100, "A+");
let st2 = createStudent("Jane", 2, 90, "A");

// students created using constructor functions
let st3 = new Student("Riddhi", 3, 100, "A+", function () { console.log("Data here") });
let st4 = new Student("Jack", 4, 33, "F", () => console.log("Data here"));

// console.log(st1);
// console.log(st2);
// console.log(st3);
// console.log(st4);

// using new keyword
// const user = new Object({ name: "John", age: 20 });
// console.log(user.name);

// student.nationlaity = "Maritian"
// // updating the value of a property
// student.fname = "John Doe";
// // deleting a property from an object
// delete student.fname;

// // . notation to access obj properties
// student.getDetails();

// student['grade'] = "A+";
// // [] notation to access obj properties
// console.log(student['grade']);




// reference vs primitive types

let a = 10;
let b = a; // it's just like saying that whatever a had, it just passed it to the b variable
a = 20;


let obj1 = { n: 100 };  //referece type and obj1 holds the memory address of the object
let obj2 = obj1; // obj2 holds the memory address of the object obj1
obj1.n = 200;

// console.log(a);
// console.log(b);

// console.log(obj1.n);
// console.log(obj2.n);


const obj11 = { fname: "John", lname: "Doe", o: { x: 10, y: 20 } };
// obj11 = {fname: "Jane", lname: "Doe"};  // this thing will not work because obj11 is a constant and it cannot be reassigned 
// obj11.fname = "Jane"; // this will work because we are not changing the reference of the object, we are just changing the value of the property


// deep copy vs shallow copy


const obj22 = obj11 // shallow copy
//  because the new object still holds the reference of the old object and if we change the value of the property of the old object, the new object will also change
// obj22.fname = "Riddhi";
// console.log(obj11.fname);
// console.log(obj22.fname);


// deep copy
const obj33 = { ...obj11 }; // this is a deep copy because the new object does not hold the reference of the old object
obj33.fname = "Undertaker";
// console.log(obj11);
// console.log(obj33);

let o = {
    age: 10,
    time: 20,
    worth: 30,
    name: "Riddhi",
    task: function () {
        console.log("Data here");
    }
}
let { age, time, worth } = o;
// var l = 10;
// var m = 20;
// var l = 30;

// console.log(o);


// iterating over an object
// let sum = 0;
// for (let key in o) {
//     if (typeof o[key] === 'number')
//         o[key] = o[key] * 2;
// }
// console.log(o);

console.log(age, time, worth);