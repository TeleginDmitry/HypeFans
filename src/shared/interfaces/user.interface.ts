export interface IUser {
  background: string | null
  avatar: string | null
  last_active: string
  description: string
  date_joined: string
  site: string | null
  username: string
  status: boolean
  prefix: string
  email: string
  posts: number
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
