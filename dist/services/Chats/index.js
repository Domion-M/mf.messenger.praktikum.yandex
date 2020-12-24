export default class ChatsService {
    constructor(APIService) {
        this.APIService = APIService;
    }
    getChatsUser() {
        return this.APIService.get('chats');
    }
    createChats(data) {
        return this.APIService.post('chats', { data });
    }
    getChatOnUsers(data) {
        return this.APIService.get(`chats/${data}/users`);
    }
    getChatChoise(data) {
        return this.APIService.post(`chats/token/${data}`);
    }
    deleteChat(data) {
        return this.APIService.delete('/chats', { data });
    }
    addChatUser(data) {
        return this.APIService.put('/chats/users', { data });
    }
    deleteChatUser(data) {
        return this.APIService.delete('/chats/users', { data });
    }
}
//# sourceMappingURL=index.js.map