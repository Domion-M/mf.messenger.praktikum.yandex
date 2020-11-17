const save = document.querySelector('.save-data');

class UserData {
    constructor(mail, login, first_name, second_name, display_name, phone) {
        this.mail = mail
        this.login = login
        this.first_name = first_name
        this.second_name = second_name
        this.display_name = display_name
        this.phone = phone
    }
};

function saveNewDataUser(e) {
    e.preventDefault();
    const valInput = [];
    const form = document.forms;
    for (let input of form[0].elements) {
        valInput.push(input.value);
    }
    const newPassword = new UserData(...valInput);
    console.log(newPassword);
}

save.addEventListener('click', saveNewDataUser);