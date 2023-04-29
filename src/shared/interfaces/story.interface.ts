
export interface IStory {
  id: number
  user: {
    avatar: string
    id: number
    prefix: string
  },
  date_joined: string
  is_my_story: boolean
}



export interface IStoryMedia {
  id: number
  date_joined: string
  media: string
  story: number
}

export interface IModalStory {
  story: {
    medias: IStoryMedia[]
  } & IStory,
  isNext: boolean,
  isPrevious: boolean
}