let emailInput = document.getElementById('emailInput');
let pwdInput = document.getElementById('pwdInput');
let submitBtn = document.getElementById('submitBtn');

let emailMessage = document.getElementById('email-message');
let passMessage = document.getElementById('password-message');
let correctMessage = document.getElementById('correct-message');

function onChange() {
    let email = emailInput.value;
    let pwd = pwdInput.value;
    if (email.length > 3 && email.includes('@') && email.includes('.') && pwd.length > 8) {
        passMessage.innerText = "";
        emailMessage.innerText = "";
        correctMessage.innerText = "All good to go!";
        correctMessage.style.color = "green";
        return true;
    }

    else {
        passMessage.innerText = "Make sure that password is more than 8 characters";
        passMessage.style.color = "red";

        emailMessage.innerText = "Make sure that email has more than 3 characters and includes @ and . too";
        emailMessage.style.color = "red";
        return false;
    }
}

// function onChangePwd(){
//     console.log("input changed");
// }


function signup() {
    let validation = onChange();
    if (validation == true) {
        let confirmation = confirm("Are you sure, do you want to submit?");
        if (confirmation == true)
            alert("Successfull signup")
        else
            location.reload();
    }
}
pwdInput.addEventListener('input', onChange);
submitBtn.addEventListener('click', signup);