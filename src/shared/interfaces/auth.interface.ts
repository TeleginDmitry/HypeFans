import { IUser } from "./user.interface"

export interface IRegister {
	email: string
	username: string
	password: string
}

export interface ILogin {
	email: string
	password: string
}



export interface IUserResponse {
	user: IUser
}

export interface ITokens  {
	access: string
	refresh: string
}

export interface IResponse extends ITokens {
  user: IUser
}
