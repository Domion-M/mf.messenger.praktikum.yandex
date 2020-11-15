const avatarBtn = document.querySelector('.userProfile__dataProfile__hover')
const changeAvatar = document.getElementById('avatar')
const label = document.querySelector('.input_file_btn span')

class Avatar {
    constructor(avatar) {
        this.avatar = avatar
    }
}
function openChengeAvatarModal() {
    console.log(this);
}
function changeAvatarUser(e) {
    e.preventDefault()
    const form = document.forms;
    for (let item of form[0]) {
        const val = item.value
        console.log(val);
        if (val.trim() != '') {
            const title = item.parentNode.previousElementSibling
            title.textContent = 'Файл загружен'
            const nameFile = val.slice(12)
            label.textContent = nameFile
            const avatar = new Avatar(val)
        }
    }
}
avatarBtn.addEventListener('click', openChengeAvatarModal)
changeAvatar.addEventListener('click', changeAvatarUser)