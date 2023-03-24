
export interface IStory {
  id: number
  user: {
    avatar: string
    id: number
    prefix: string
  },
  date_joined: string
  isMyStory: boolean
}

