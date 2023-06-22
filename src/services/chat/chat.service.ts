import instance from 'api/api.interceptor'

interface ICreateMembership {
  conversation: number
  user: number
}

export const chatService = {
  createMembership: async (data: ICreateMembership) => {
    return await instance.post(`membership/`, data)
  },

  createConversation: async () => {
    return await instance.post(`conversations/`, {})
  },

  getConversation: async () => {
    return await instance.get(`conversations/`)
  }
}
