const save = document.querySelector('.save-data');

function saveNewPassword(e) {
    e.preventDefault();
    const newPassword = {};
    const form = document.forms;
    for (let input of form[0].elements) {
        newPassword[input.name] = input.value;
    };
    console.log(newPassword);
}

save.addEventListener('click', saveNewPassword);