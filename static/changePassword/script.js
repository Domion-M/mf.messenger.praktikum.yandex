const save = document.querySelector('.saveData')
class Password {
    constructor(oldPassword, newPassword) {
        this.oldPassword = oldPassword
        this.newPassword = newPassword
    }
}

function saveNewPassword(e) {
    e.preventDefault()
    const valInput = []
    const form = document.forms
    for (let input of form[0].elements) {
        valInput.push(input.value)
    }
    const newPassword = new Password(...valInput)
    console.log(newPassword);

}

save.addEventListener('click', saveNewPassword)