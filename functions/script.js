
// myFunction();

// function declaration
function myFunction() {
    // var x = 10
    console.log("Hello World, this is my function");
}

// function expression
var fun = function () {
    console.log("Hello World, this is my function");
}

// // arrow function 
let arrowFun = () => {
    console.log("Hello World, this is my function");
}



// rest operator
function sum2(a, b) {
    return a + b;
}
function sum3(a, b, c) {
    return a + b + c;
}

function sum(...args) {
    // console.log(args);
    let tsum = 0;
    for (let i = 0; i < args.length; i++) {
        tsum = tsum + args[i];
    }
    return tsum;
}

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(sum2(10,20));
// console.log(sum3(10,20,30));


// scopes and closures

function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log("X: ", x, " Y: ", y);
    }
    return inner;
}

// let returnedFun = outer();
// returnedFun();
// returnedFun();
// returnedFun();


// iife - immediately invoked function expression

// (function print(){
//     console.log("Hello World");
// })();


// function print(){

// }
// print();

// try, catch, finally
const a = 10;
try {
    a = 20;
    console.log(a);
}
catch (e) {
    console.log('Some error occured');
}
finally{
    console.log('Finally block');   
}