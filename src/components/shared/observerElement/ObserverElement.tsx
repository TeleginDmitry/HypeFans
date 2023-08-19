import {
  IntersectionObserverProps,
  useInView
} from 'react-intersection-observer'
import { useEffect } from 'react'

interface IObserverElement extends Partial<IntersectionObserverProps> {
  onVisible: () => void
  className?: string
}

const ObserverElement = ({
  className,
  onVisible,
  ...observerProps
}: IObserverElement) => {
  const { inView, ref } = useInView({
    ...observerProps
  })

  useEffect(() => {
    if (inView) onVisible()
  }, [inView])

  return <div className={className} ref={ref}></div>
}

export default ObserverElement
