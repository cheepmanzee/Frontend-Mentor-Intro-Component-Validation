const $form = document.getElementById('form');
const $inputEmail = document.getElementById('email');
const $inputPass = document.getElementById('password');
const $inputFirst = document.querySelector('.first-input');
const $inputLast = document.querySelector('.last-input');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


$form.addEventListener('submit', (e) => {
    let emailValue = $inputEmail.value;
    let passValue = $inputPass.value;
    let firstValue = $inputFirst.value;
    let lastValue = $inputLast.value;

    if (validateEmail(emailValue)) {
        $inputEmail.classList.remove('error');
    } else {
        $inputEmail.classList.add('error')
        e.preventDefault();
    }

    if (passValue.indexOf(' ') === -1 && passValue.length >= 8) {
        $inputPass.classList.remove('error');
    } else {
        $inputPass.classList.add('error');
        e.preventDefault();
    }

    if (firstValue) {
        $inputFirst.classList.remove('error');
    } else {
        $inputFirst.classList.add('error');
        e.preventDefault();
    }

    if (lastValue) {
        $inputLast.classList.remove('error');
    } else {
        $inputLast.classList.add('error');
        e.preventDefault();
    }
});

