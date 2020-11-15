const inputFocusBlur = document.querySelectorAll('.loginAndSigninForm__entry input')
const logUserDate = document.querySelector('.logArray')

class UserAuth {
    constructor(login, password) {
        this.login = login
        this.password = password
    }
}

function validFocusAndBlurInput(e) {
    const inputPlaceholder = this.nextSibling.nextSibling
    if (e.type === 'focus') {
        inputPlaceholder.classList.add('active')
    } else if (e.type === 'blur') {
        this.value.trim() === '' && inputPlaceholder.classList.remove('active')
    }
}

function logDateUser(e) {
    e.preventDefault()
    const userDate = []
    for (let item of inputFocusBlur) {
        userDate.push(item.value)
    }
    const user = new UserAuth(...userDate)
    console.log(user);
}

for (let item of inputFocusBlur) {
    item.addEventListener('focus', validFocusAndBlurInput)
    item.addEventListener('blur', validFocusAndBlurInput)
}

logUserDate.addEventListener('click', logDateUser)
