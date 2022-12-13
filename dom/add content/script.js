let message = document.getElementById('messageField');
let button = document.getElementById('submitBtn');
let ul = document.getElementById('message-list');

function addElement() {
    if (message.value !== '') {
        let li = document.createElement('li');
        li.innerText = message.value;
        ul.append(li);
    }
    else
        alert('Please enter a message');
}

button.onclick = addElement;