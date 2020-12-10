const modalMenuBtn = document.querySelector('.chat-menu');
const modalMenu = document.querySelector('.window-chat__message__wrap__modal-menu');
const sendMail = document.querySelector('.send-btn-mail button');
const inputMessage = document.querySelector('input[name="message"]');
class Massage {
    constructor(message, date) {
        this.massage = message;
        this.date = date;
    }
}
;
function openModalMenu() {
    this.classList.toggle('active');
    modalMenu.classList.toggle('display');
}
;
function sendMailChat(e) {
    e.preventDefault();
    if (inputMessage.value.trim() !== '') {
        const date = new Date();
        const day = date.getDay();
        const minutes = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
        const time = `${date.getHours()}:${minutes}`;
        const userMessage = new Massage(inputMessage.value, [time, day]);
        inputMessage.value = '';
        inputMessage.focus();
        console.log(userMessage);
    }
    else {
        inputMessage.focus();
    }
}
function sendMailKeyboardEnter(e) {
    if (e.code === 'Enter') {
        e.preventDefault();
        sendMailChat(e);
    }
}
modalMenuBtn.addEventListener('click', openModalMenu);
sendMail.addEventListener('click', sendMailChat);
inputMessage.addEventListener('keydown', sendMailKeyboardEnter);
//# sourceMappingURL=index.js.map