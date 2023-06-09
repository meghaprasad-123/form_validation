const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const mail = document.getElementById('mail');
const number = document.getElementById('number');
const password = document.getElementById('password');
const c_password = document.getElementById('c-password');
const registrationForm = document.getElementById('registrationForm');
const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error3');
const error4 = document.querySelector('.error4');
const error5 = document.querySelector('.error5');
const error6 = document.querySelector('.error6');
const error7 = document.querySelector('.error7');
const nameRegex = /^[a-zA-Z\s]+$/;
const userRegex = /^[a-zA-Z1-9@#]+$/;
const mailRegex = /^[a-z1-9@.+]+$/;
const numRegex = /^\d{3}\s\d{3}\s\d{4}$/;
const passRegex = /^[a-zA-z1-9@.#*]{8,24}$/;
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // for fullname
    let nameInput = fullname.value;
    let isValid = true;
    let isFormValid = true;
    if (nameInput.length === 0) {
        error1.innerText = 'Name is required';
        isValid = false;
        isFormValid = false;
    }
    else if (!nameRegex.test(nameInput)) {
        error1.innerText = 'Invalid';
        isValid = false;
        isFormValid = false;
    }
    else {
        error1.innerText = '';
        isValid = true;
    }
    // for username
    let userInput = username.value;
    if (userInput.length === 0) {
        error2.innerText = 'Username is required';
        isValid = false;
        isFormValid = false;
    }
    else if (!userRegex.test(userInput)) {
        error2.innerText = 'Invalid username';
        isValid = false;
        isFormValid = false;
    }
    else {
        error2.innerText = '';
        isValid = true;
    }
    // for email
    let mailInput = mail.value;
    if (mailInput.length === 0) {
        error3.innerText = 'Mail is required';
        isValid = false;
        isFormValid = false;
    }
    else if (!mailRegex.test(mailInput)) {
        error3.innerText = 'Invalid email';
        isValid = false;
        isFormValid = false;
    }
    else {
        error3.innerText = '';
        isValid = true;
    }
    // for number
    let numInput = number.value;
    if (numInput.length === 0) {
        error4.innerText = 'Number is required';
        isValid = false;
        isFormValid = false;
    }
    else if (!numRegex.test(numInput)) {
        error4.innerText = 'Invalid format. Example: 123 456 7890';
        isValid = false;
        isFormValid = false;
    }
    else {
        error4.innerText = '';
        isValid = true;
    }
    // for password
    let passInput = password.value;
    if (passInput.length === 0) {
        error5.innerText = 'Password is required';
        isValid = false;
        isFormValid = false;
    }
    else if (!passRegex.test(passInput)) {
        error5.innerText = 'Mini 8 char and maxi 24 char';
        isValid = false;
        isFormValid = false;
    }
    else {
        error5.innerText = '';
        isValid = true;
    }
    // for confirm password
    let conpassInput = c_password.value;
    if (conpassInput.length === 0) {
        error6.innerText = 'Please confirm the password';
        isValid = false;
        isFormValid = false;
    }
    else if (passInput !== conpassInput) {
        error6.innerText = 'Passwords do not match';
        isValid = false;
        isFormValid = false;
    }
    else {
        error6.innerText = '';
        isValid = true;
    }
    // for radios
    const radios = document.getElementsByName('gender');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isValid = true;
            break;
        }
    }
    if (!isValid) {
        error7.innerText = 'Please select a gender';
        isFormValid = false;
    }
    else {
        error7.innerText = '';
    }
    if (isFormValid) {
        alert('Register Successfully');
    }
});
