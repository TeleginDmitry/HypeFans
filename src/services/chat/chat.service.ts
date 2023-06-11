import instance from 'api/api.interceptor'

interface ICreateMembership {
	user: number
	conversation: number
}

export const chatService = {
	createConversation: async () => {
		return await instance.post(`conversations/`, {})
	},

	createMembership: async (data: ICreateMembership) => {
		return await instance.post(`membership/`, data)
	},

	getConversation: async () => {
		return await instance.get(`conversations/`)
	},
}
