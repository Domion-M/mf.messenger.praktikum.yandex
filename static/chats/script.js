const modalMenuBtn = document.querySelector('.chatMenu')
const modalMenu = document.querySelector('.windowChat__message__wrap__modalMenu')
const sendMail = document.querySelector('.sendBtnMail')
const inputMessage = document.querySelector('input[name="message"]')

class Massage {
    constructor(message, date) {
        this.massage = message
        this.date = date
    }
}

function openModalMenu() {
    this.classList.toggle('active')
    modalMenu.classList.toggle('display')
}
function sendMailChat(e) {
    e.preventDefault()
    const date = new Date()
    const day = date.getDay()
    const minutes = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes()
    const time = `${date.getHours()}:${minutes}`
    const userMessage = new Massage(inputMessage.value, [time, day])
    inputMessage.value = ''
    console.log(userMessage);
}
modalMenuBtn.addEventListener('click', openModalMenu)
sendMail.addEventListener('click', sendMailChat)