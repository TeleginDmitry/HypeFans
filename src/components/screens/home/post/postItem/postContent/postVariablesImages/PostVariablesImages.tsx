import { IPostMediaShort } from 'shared/interfaces/post.interface'
import useLocalStorage from 'hooks/useLocalStorage'
import { IS_SLIDER } from 'configs/index.config'

import PostSwiperMedias from './postSwiperMedias/PostSwiperMedias'
import PostMedias from './postMedias/PostMedias'

interface IPostVariablesImages {
  medias: IPostMediaShort[]
}

const PostVariablesImages = ({ medias }: IPostVariablesImages) => {
  const [value, setValue] = useLocalStorage(IS_SLIDER, true)

  return value ? (
    <PostSwiperMedias medias={medias}></PostSwiperMedias>
  ) : (
    <PostMedias medias={medias}></PostMedias>
  )
}

export default PostVariablesImages
