import { windowChat } from '../../pages/chats';

export class Ws {
  socket:WebSocket;

  isConnect:boolean;

  constructor(userId:number, chatId:number, tokenChat:string) {
    this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${tokenChat}`);
    this.isConnect = false;
  }

  connect() {
    this.socket.addEventListener('open', () => {
      this.isConnect = true;
      this.socket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));
    });
    this.socket.addEventListener('message', (event) => {
      windowChat.updateMessage(JSON.parse(event.data));
    });
  }

  closeConnect() {
    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        this.connect();
      }
    });
  }

  sendMail(text:string) {
    this.socket.send(JSON.stringify({
      content: text,
      type: 'message',
    }));
  }
}
