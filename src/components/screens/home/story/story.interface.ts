
export interface IStory {
  id: number
  user: {
    id: number
    prefix: string
  }
  avatar: string
  isMyStory?: boolean
}

