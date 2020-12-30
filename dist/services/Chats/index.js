var CHATS;
(function (CHATS) {
    CHATS["USERS"] = "/chats/users";
    CHATS["CHATS"] = "/chats";
})(CHATS || (CHATS = {}));
export default class ChatsService {
    constructor(APIService) {
        this.APIService = APIService;
    }
    getChatsUser() {
        return this.APIService.get(CHATS.CHATS);
    }
    createChats(data) {
        return this.APIService.post(CHATS.CHATS, { data });
    }
    getChatOnUsers(data) {
        return this.APIService.get(`chats/${data}/users`);
    }
    getChatChoise(data) {
        return this.APIService.post(`chats/token/${data}`);
    }
    deleteChat(data) {
        return this.APIService.delete(CHATS.CHATS, { data });
    }
    addChatUser(data) {
        return this.APIService.put(CHATS.USERS, { data });
    }
    deleteChatUser(data) {
        return this.APIService.delete(CHATS.USERS, { data });
    }
}
//# sourceMappingURL=index.js.map