export interface IUser {
	id: number
	email: string
	username: string
	description: string
	date_joined: string
	background: string | null
	avatar: string | null
	prefix: string
	posts: number
	status: boolean
	site: string
}


export interface IDataUser {
  username: string
  prefix: string
  description?: string
  site?: string
  background?: File | null
  avatar?: File | null
}
export interface IChangeUser {
	data: IDataUser
	id: number
}

export interface IShortUser {
	id: number
	prefix: string
	avatar: string | null
	username: string
}

