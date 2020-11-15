const inputFocusBlur = document.querySelectorAll('.loginAndSigninForm__entry input')
const logUserDate = document.querySelector('.logArray')

class UserAuth {
    constructor(login, password) {
        this.login = login
        this.password = password
    }
}

class UserSignin extends UserAuth {
    constructor(email, login, first_name, second_name, phone, password, passwordCheck) {
        super(login, password)
        this.email = email
        this.first_name = first_name
        this.second_name = second_name
        this.phone = phone
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
    if (e.target.id === 'loginBtn') {
        const user = new UserAuth(...userDate)
        console.log(user);
    } else if (e.target.id === 'signinBtn') {
        const user = new UserSignin(...userDate)
        console.log(user);
    }
}

for (let item of inputFocusBlur) {
    item.addEventListener('focus', validFocusAndBlurInput)
    item.addEventListener('blur', validFocusAndBlurInput)
}

logUserDate.addEventListener('click', logDateUser)


