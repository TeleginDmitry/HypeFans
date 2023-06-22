export interface IUser {
  background: string | null
  avatar: string | null
  site: string | null
  date_joined: string
  description: string
  username: string
  status: boolean
  prefix: string
  posts: number
  email: string
  id: number
}

export interface IDataUser {
  background?: File | null
  avatar?: File | null
  description?: string
  username: string
  prefix: string
  site?: string
}
export interface IChangeUser {
  data: IDataUser
  id: number
}

export interface IShortUser {
  avatar: string | null
  username: string
  prefix: string
  id: number
}
