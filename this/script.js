let obj = {
    fname: "Riddhi",
    lname: "Suteri",

    printName: function () {
        console.log("line 6 : inside obj :", this);
        inner = () => {
            console.log("line 8 : inside inner function :", this);
        }
        inner();
    }
    // childObj:{
    //     nestedAge: 10,
    //     printName: function () {
    //         console.log("inside obj :", this);
    //     }
    // }
    // normalFunc: function () {
    //     console.log("inside normal func :", this);
    //     arrowFunc = () => { console.log("inside arrow func :", this) }
    //     // anotherNormalFunc = function () {
    //     //     console.log("inside another normal func :", this);
    //     // }
    //     // anotherNormalFunc();
    //     arrowFunc();
    // }
}

// let printName2 = function () {
//     console.log("outside obj :", this);
//     arrowFunc = () => { console.log("inside arrow func :", this) }
//     arrowFunc();
// }

// let child = obj.childObj;
// console.log(obj.normalFunc());

obj.printName();
// printName2();