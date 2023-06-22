import { IUser } from './user.interface'

export interface IRegister {
  password: string
  username: string
  email: string
}

export interface ILogin {
  password: string
  email: string
}

export interface IUserResponse {
  user: IUser
}

export interface ITokens {
  refresh: string
  access: string
}

export interface IResponse extends ITokens {
  user: IUser
}
