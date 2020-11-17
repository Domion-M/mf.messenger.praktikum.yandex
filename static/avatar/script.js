const avatarBtn = document.querySelector('.user-profile__data-profile__hover');
const changeAvatar = document.getElementById('avatar');
const label = document.querySelector('.input_file_btn span');

function openChengeAvatarModal() {
    console.log(this);
};
function changeAvatarUser(e) {
    e.preventDefault();
    const form = document.forms;
    for (let item of form[0]) {
        const val = item.value;
        if (val.trim() != '') {
            const title = item.parentNode.previousElementSibling;
            title.textContent = 'Файл загружен';
            const nameFile = val.slice(12);
            label.textContent = nameFile;
            const avatar = { [item.name]: item.value };
            console.log(avatar);
        }
    }
}
if (avatarBtn) {
    avatarBtn.addEventListener('click', openChengeAvatarModal);
};
changeAvatar.addEventListener('click', changeAvatarUser);