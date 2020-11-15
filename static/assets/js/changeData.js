const save = document.querySelector('.saveData')
class Password {
    constructor(oldPassword, newPassword) {
        this.oldPassword = oldPassword
        this.newPassword = newPassword
    }
}
class UserData {
    constructor(mail, login, first_name, second_name, display_name, phone) {
        this.mail = mail
        this.login = login
        this.first_name = first_name
        this.second_name = second_name
        this.display_name = display_name
        this.phone = phone
    }
}

function saveNewPassword(e) {
    e.preventDefault()
    const valInput = []
    const form = document.forms
    for (let input of form[0].elements) {
        valInput.push(input.value)
        console.log(input.value);
    }
    if (e.target.id === 'userPassword') {
        const newPassword = new Password(...valInput)
        console.log(newPassword);
    } else if (e.target.id === 'userData') {
        const newPassword = new UserData(...valInput)
        console.log(newPassword);
    }

}

save.addEventListener('click', saveNewPassword)