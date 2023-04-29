import { IShortUser } from "./user.interface";




export interface IMembership extends IShortUser {
  created_at: string
}

export interface IConversation {
  id: number
  // participants: IParticipants[]
  last_message_date: string;
  last_message: string;
  avatar: string
  name: string
  membership: null | IMembership

  
}
