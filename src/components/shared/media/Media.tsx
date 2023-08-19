import {
  IImageMotion,
  IVideoMotion,
  ITypeMedia
} from 'shared/interfaces/media.interface'
import Video from 'components/ui/video/Video'
import Image from 'components/ui/image/Image'

interface IMedia {
  imageProps?: IImageMotion
  videoProps?: IVideoMotion
  type: ITypeMedia
  src: string
}

export default function Media({ imageProps, videoProps, type, src }: IMedia) {
  if (!src) return null

  return (
    <>
      {type === 'video' ? (
        <Video {...videoProps} src={src} />
      ) : (
        <Image {...imageProps} src={src} />
      )}
    </>
  )
}
