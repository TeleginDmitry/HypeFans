import instance from "api/api.interceptor"
import { API_URL } from "configs/api.config"


interface ICreateMembership {
  user: number
  conversation: number
}

export const chatService = {
  createConversation: async () => {
    return await instance.post(`${API_URL}/conversations/`, {})
  },
  
  createMembership: async (data: ICreateMembership) => {
    return await instance.post(`${API_URL}/membership/`, data)
  },
  
  getConversation: async () => {
    return await instance.get(`${API_URL}/conversations/`)
  },

}