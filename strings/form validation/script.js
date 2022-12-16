let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('pwd');
let button = document.getElementById('btn');
let messageDiv = document.getElementById('message');
passwordInput.addEventListener('keypress', validate)


function validate() {
    let email = emailInput.value;
    let password = passwordInput.value;

    if (email != "" && email.includes("@")) {
        if (password != "" && password.length >= 5) {
            console.log("Email & password are valid")
            messageDiv.innerText = "Email & password are valid";
            messageDiv.style.color = "green";
            button.removeAttribute("disabled");
        }
    }

    else {
        messageDiv.innerText = "Email & password validation failed";
        messageDiv.style.color = "red";
        console.log("Email or password is invalid")
    }
}