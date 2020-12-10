const inputFocusBlur = document.querySelectorAll('.login-and-signin-form__entry input');
const logUserDate = document.querySelector('.log-array');



class UserSignin {
    constructor(email, login, first_name, second_name, phone, password, passwordCheck) {
        this.login = login
        this.password = password
        this.email = email
        this.first_name = first_name
        this.second_name = second_name
        this.phone = phone
    }

};

function validFocusAndBlurInput(e) {
    const inputPlaceholder = this.nextSibling.nextSibling
    if (e.type === 'focus') {
        inputPlaceholder.classList.add('active')
    } else if (e.type === 'blur') {
        this.value.trim() === '' && inputPlaceholder.classList.remove('active')
    }
};

function logDateUser(e) {
    e.preventDefault();
    const userDate = [];
    for (let item of inputFocusBlur) {
        userDate.push(item.value);
    }
    const user = new UserSignin(...userDate);
    console.log(user);
};

for (let item of inputFocusBlur) {
    item.addEventListener('focus', validFocusAndBlurInput);
    item.addEventListener('blur', validFocusAndBlurInput);
};

logUserDate.addEventListener('click', logDateUser);


