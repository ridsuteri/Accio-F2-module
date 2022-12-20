let a = 10;

let fun1 = function () {
    let x = 30;
    function fun2() {
        let b = 20;
        console.log(a);
        console.log(x);
    }
    return fun2;
}

let fun2 = fun1();
fun2();
fun2();
console.log(a);
