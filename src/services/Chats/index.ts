import ApiServices from "../Api/index.js"



export default class ChatsService {
    APIService: ApiServices
    constructor(APIService: ApiServices) {
        this.APIService = APIService
    }

    getChatsUser() {
        return this.APIService.get('chats')
    }
    createChats(data: { title: string }) {
        return this.APIService.post('chats', { data })
    }
    getChatOnUsers(data: number) {
        return this.APIService.get(`chats/${data}/users`)
    }
    getChatChoise(data: string | number) {
        return this.APIService.post(`chats/token/${data}`)
    }
    deleteChat(data: { chatId: number }) {
        return this.APIService.delete('/chats', { data })
    }
    addChatUser(data: { users: number[], chatId: number }) {
        return this.APIService.put('/chats/users', { data })
    }
    deleteChatUser(data: { users: number[], chatId: number }) {
        return this.APIService.delete('/chats/users', { data })
    }
}