export interface ImageOrVideoProps {
  type: 'image' | 'video'
  onClick?: () => void
  className?: string
  controls?: boolean
  muted?: boolean
  loop?: boolean
  media: string
  alt?: string
}
