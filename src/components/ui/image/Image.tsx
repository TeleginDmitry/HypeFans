import { useInView } from 'react-intersection-observer'
import React from 'react'

interface IImage
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string
}

const Image = ({ src, ...imageProps }: IImage) => {
  const { inView, ref } = useInView({
    rootMargin: '0px 0px 200px 0px',
    triggerOnce: true
  })

  return <img {...imageProps} src={inView ? src : ''} ref={ref} />
}

export default Image
