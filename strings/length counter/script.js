let stringInput = document.getElementById("stringInput");
let length = document.getElementById("length");
stringInput.addEventListener('keyup', (e) => {
    if(e.key !== "Escape"){

    }
    let str = stringInput.value;
    length.innerHTML = str.length;
    console.log(str.length);
})
// console.log(string);