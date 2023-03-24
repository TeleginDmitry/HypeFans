
export interface IUserMessage {
    id: number
    username: string
    avatar: string
}


export interface IMessage {
  id: number
  user: IUserMessage
  last__date: string;
  last__messages: string;
}
