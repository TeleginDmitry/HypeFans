import FlexibleImages from 'components/shared/flexibleImages/FlexibleImages'
import { IPostMediaShort } from 'shared/interfaces/post.interface'
import PostSwiperMedias from '../postSwiperMedias/PostSwiperMedias'
import useLocalStorage from 'hooks/useLocalStorage'
import { IS_SLIDER } from 'configs/index.config'

interface IPostVariablesImages {
	medias: IPostMediaShort[]
}

const PostVariablesImages = ({ medias }: IPostVariablesImages) => {
	const [value, setValue] = useLocalStorage(IS_SLIDER, true)

	return value ? (
		<PostSwiperMedias medias={medias}></PostSwiperMedias>
	) : (
		<FlexibleImages images={medias}></FlexibleImages>
	)
}

export default PostVariablesImages
