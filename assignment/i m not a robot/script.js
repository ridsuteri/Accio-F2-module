// 1. loadin/placing the first 5 images from images folder to the the screen
let mainDiv = document.getElementById('main');
for (let i = 1; i <= 5; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', `images/${i}.jpeg`);
    img.setAttribute('data-ns-img', i)
    img.onclick = function (e) {
        readCaptcha(this);
    };
    img.height = 100;
    img.width = 100;
    mainDiv.append(img);
}

// generate a random number between 1 and 5
let n = Math.floor(Math.random() * 5) + 1;
let img = document.createElement('img');
img.setAttribute('src', `images/${n}.jpeg`);
img.setAttribute('data-ns-img', n)
img.height = 100;
img.width = 100;
img.onclick = function (e) {
    readCaptcha(this);
};
mainDiv.append(img);

let captcha = [];
let flag = false;
let click1 = 0;
let click2 = 0;
let verify = document.createElement('button');
verify.innerHTML = 'Verify';

let reset = document.createElement('button');
reset.innerHTML = 'Reset';

function readCaptcha(e) {
    console.log(e.getAttribute('data-ns-img'));
    // captcha.push(e.getAttribute('data-ns-img'));
    // console.log(captcha);
    if (flag != false)
        click2 = e.getAttribute('data-ns-img');
    else
        click1 = e.getAttribute('data-ns-img');

    // flag = true;
    console.log(click1, click2);

    if (click1 != 0 && flag == false && !mainDiv.contains(reset)) {

        mainDiv.append(reset);
        reset.onclick = resetCaptcha;
    }
    if (click1 != 0 && click2 != 0 && !mainDiv.contains(verify)) {
        // let verify = document.createElement('button');
        // verify.innerHTML = 'Verify';
        mainDiv.append(verify);
        verify.onclick = checkCaptcha;
    }
    flag = true;
}

//
function checkCaptcha() {
    if (click1 == click2) {
        console.log('verified');
    }
    else {
        console.log('not verified');
    }
}

function resetCaptcha() {
    // location.reload();
    click1 = 0;
    click2 = 0;
    flag = false;
}