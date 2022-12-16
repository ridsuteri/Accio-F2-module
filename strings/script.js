let fname = 'John';
// let s = 'Hello' + fname + 'World';

// string templating to do the same stuff as above
let s  = `Hello ${fname} World`;
// s[0] = 'P';
s = "Changed strings";
// console.log(s);

// String methods


// character comparsions
// console.log('a' < 'b'); // true

// console.log('a' ==  'a'); //true

// console.log('a' ==  'A'); //false (different ascii values)

// console.log('a' > 'A'); // true

// String comparison
// console.log('ab' > 'aa') // true
// console.log('aa' > 'aab')


// given a string , check if it contains only alphanumeric characters or not

// given the array of strings, return an array with all the strings modified such that the first letter of the string is cpatila and all the  remaining letters are small case
let nameList = ["riDDhi", "alPHA", "BETA", "gamma"];

// return a list of all the strings which has a happy word in it
let messages = ["Happy diwali", "Merry christmas", "Happy new year", "Have a nice day"];











let updatedNameList = nameList.map((str)=>{
    str = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return str;
})
console.log(updatedNameList);
