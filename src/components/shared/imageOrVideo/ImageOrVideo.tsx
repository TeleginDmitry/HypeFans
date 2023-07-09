import Image from 'components/ui/image/Image'
import Video from 'components/ui/video/Video'

import { ImageOrVideoProps } from './ImageOrVideo.interface'

const ImageOrVideo = ({
  controls = false,
  muted = false,
  loop = false,
  className,
  onClick,
  media,
  type,
  alt
}: ImageOrVideoProps) => {
  if (!media.length) return null

  return (
    <>
      {type === 'video' ? (
        <Video
          className={className}
          controls={controls}
          onClick={onClick}
          muted={muted}
          src={media}
          loop={loop}
        />
      ) : (
        <Image className={className} onClick={onClick} src={media} alt={alt} />
      )}
    </>
  )
}

export default ImageOrVideo
