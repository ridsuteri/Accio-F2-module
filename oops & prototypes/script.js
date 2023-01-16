// let Person = {
//     name: "John",
//     age: 30,
//     gender: "Male"
// }

// Jane 33 Female
// let Jane = {
//     name: "Jane",
//     age: 33,
//     gender: "female"
// }

// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("John", 30,"Male");
// let person2 = new Person("Jane", 33,"Female");


let User = {
    fname: "John",
    lname: "Doe",
    dob: 2000,
}

let Admin = {
    fname: "Jane",
    lname: "Doe",
    dob: 1980,
}

Object.prototype.displayInfo = function () {
    console.log(this.fname + " " + this.lname + " " + this.dob);
}

// Object();
// Array();
// Person()

let arr = [1, 2, 3];
let arr2 = new Array(1, 2, 3);
console.log(User);
console.log(Admin);
function test() {
    console.log("test");
}
// User.displayInfo();
// Admin.displayInfo();