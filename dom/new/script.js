let heading1 = document.getElementById("heading1");
let img = document.getElementsByTagName("img")[0];
let button = document.getElementsByTagName("button")[0];
let body = document.getElementsByTagName("body")[0];




// body.onkeydown = printMessage;
body.addEventListener("keydown", function printMessage(riddhi) {
    console.log(riddhi.key);
    // console.log("A button is pressed");
})
// button.onclick = changeBg;
// button.addEventListener("click", function changeBg() {
//     img.setAttribute("src", "https://img.freepik.com/free-vector/red-devil-face-vector-logo_43623-1006.jpg?w=700");
//     body.style.backgroundColor = "black";
// })
// heading1.remove();