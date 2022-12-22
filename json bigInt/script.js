let obj = {
    search: 'hoodies',
    size: 'M',
    maxPrice: 1000,
}

// let jsonData = {
//     "search": "hoodies",
//     "size": "M",
//     "maxPrice": 1000,
// "test": "function (){console.log('test')}"
// }
let data = "This is my data an:something";

// let json = JSON.stringify(obj);
// console.log(json.maxPrice);
// console.log(data.my);
// let resObj = JSON.parse(json)
// console.log(resObj);

// BigInt

let n1 = 1223334384035n;
let n2 = 3434535353n
let a = 10n;
let b = 10n;
// console.log(a === b)
//  2^53 - 1
// we use bigint to store large numbers
let res = n1 * n2;
// console.log(res);


// Symbol
// let sym1 = Symbol('a');
// let sym2 = Symbol('a');
// console.log(sym1 == sym2);

let id = Symbol('id'); //1234
// console.log(id);
let mysteryObj = {
    id: 1,
    username: 'admin',
    password: 'admin',
    [id]: 10
}
// i am assuming that I didn't know that id already existed on this object
// I just wanted to add a new key to my object
mysteryObj[id] = 20;
// console.log(mysteryObj);
// console.log(mysteryObj.id);

for (let key in mysteryObj) {
    // console.log(key);
}

// Dates in js
// dates are js built in objects
let date = new Date();
console.log(date);