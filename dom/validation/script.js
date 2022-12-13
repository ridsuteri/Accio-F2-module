let username = document.getElementById("usernameField");
let password = document.getElementById("passwordField");
let button = document.getElementById("submitBtn");

function checkValidation() {
    if (username.value != "" && password.value != "") {
        alert("Your details are stored!");
    }
    else {
        alert("Please fill in all fields!");
    }
}


button.onclick = checkValidation;