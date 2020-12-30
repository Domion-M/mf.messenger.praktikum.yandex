import ApiServices from "../Api/index.js"

enum CHATS {
    USERS = '/chats/users',
    CHATS = '/chats'
}

export default class ChatsService {
    APIService: ApiServices
    constructor(APIService: ApiServices) {
        this.APIService = APIService
    }

    getChatsUser() {
        return this.APIService.get(CHATS.CHATS)
    }
    createChats(data: { title: string }) {
        return this.APIService.post(CHATS.CHATS, { data })
    }
    getChatOnUsers(data: number) {
        return this.APIService.get(`chats/${data}/users`)
    }
    getChatChoise(data: string | number) {
        return this.APIService.post(`chats/token/${data}`)
    }
    deleteChat(data: { chatId: number }) {
        return this.APIService.delete(CHATS.CHATS, { data })
    }
    addChatUser(data: { users: number[], chatId: number }) {
        return this.APIService.put(CHATS.USERS, { data })
    }
    deleteChatUser(data: { users: number[], chatId: number }) {
        return this.APIService.delete(CHATS.USERS, { data })
    }
}