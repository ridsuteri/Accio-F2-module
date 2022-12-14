// 1. 
let a = 10, b = 20;

function print() {
    let a = 1;
    let b = 2;
    console.log(a);
    console.log(b);
}
// print();








// 2. 
var x = 200;
function log(){
    console.log(x);
    var x = 100;
}
// log();










// 3. 
(function (x) {
    return (function (y) {
        console.log(x); 
    })(2); 
})(1);

// function o(x){  // x = 1 now

//     function i(y){  // y = 2 here
//         console.log(x); 
//     }

//     i(2);
// }


// o(1)