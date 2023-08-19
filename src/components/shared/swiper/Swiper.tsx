import { ChevronRight, ChevronLeft } from 'icons-hypefans-lib'
import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import cn from 'utils/classNames/classNames'

import styles from './Swiper.module.scss'

interface IOptions {
  isActive: boolean
  isPrev: boolean
  isNext: boolean
  inView: boolean
}

interface ISwiper<T> {
  children: (item: T, options: IOptions, index?: number) => React.ReactNode
  countViewElements?: { [key: number]: number } | number
  beforeElements?: React.ReactElement
  afterElements?: React.ReactElement
  countSwipeSlides?: number
  initialIndex?: number
  elementClass?: string
  isCenter?: boolean
  gap?: number
  target: T[]
}

const Swiper = <T,>({
  countViewElements = 1,
  countSwipeSlides = 1,
  initialIndex = 0,
  isCenter = false,
  beforeElements,
  afterElements,
  elementClass,
  children,
  gap = 10,
  target
}: ISwiper<T>) => {
  const { inView, ref } = useInView()

  const wrapperRef = useRef<HTMLDivElement>(null)

  const indexLengthTarget = target.length - 1

  const [widthElement, setWidthElement] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [indexActiveElement, setIndexActiveElement] = useState(
    isCenter ? getCenterIndex() : initialIndex
  )
  const [hasNextSwipe, setHasNextSwipe] = useState(false)
  const [hasPrevSwipe, setHasPrevSwipe] = useState(false)

  // ============================================================

  const [isDragging, setIsDragging] = useState(false)
  // const [dragStartX, setDragStartX] = useState(0)
  const [dragCurrentX, setDragCurrentX] = useState(0)

  function handleMouseDown(event) {
    setIsDragging(true)
    setDragCurrentX(event.clientX)
  }

  function handleMouseMove(event) {
    if (!isDragging) return

    const delta = event.clientX - dragCurrentX

    setTranslateX((prevTranslateX) => prevTranslateX + delta)
    setDragCurrentX(event.clientX)
  }

  function handleMouseUp() {
    if (!isDragging) return

    console.log('handleMouseUp')
    setIsDragging(false)

    const newIndex = Math.floor(-translateX / (widthElement + gap))
    const newTranslateX = -newIndex * (widthElement + gap)

    setIndexActiveElement(newIndex)
    setTranslateX(newTranslateX)
  }

  // ============================================================

  function swipeNext() {
    if (!hasNextSwipe) return
    setIndexActiveElement((state) => state + countSwipeSlides)
  }

  function swipePrev() {
    if (!hasPrevSwipe) return
    setIndexActiveElement((state) => state - countSwipeSlides)
  }

  function getSelectCountElement() {
    if (typeof countViewElements === 'number') return countViewElements

    const windowWidth = window.innerWidth

    const keysCountViewElements = Object.keys(countViewElements).reverse()

    for (let i = 0; i < keysCountViewElements.length; i++) {
      const key = keysCountViewElements[i]

      if (+key < windowWidth) {
        return countViewElements[key]
      }
    }
  }

  function getCenterIndex() {
    const selectCountElement = getSelectCountElement()
    return Math.floor(selectCountElement / 2)
  }

  useEffect(() => {
    const centerIndexElement = isCenter ? getCenterIndex() : 0
    const maxIndex = indexLengthTarget - countSwipeSlides + 1

    setHasNextSwipe(indexActiveElement < maxIndex)
    setHasPrevSwipe(indexActiveElement - centerIndexElement > 0)
  }, [indexActiveElement, indexLengthTarget, isCenter, countSwipeSlides])

  useEffect(() => {
    const currentWrapper = wrapperRef.current

    if (!currentWrapper) return

    function changeWidthElement() {
      const selectCountElement = getSelectCountElement()

      let width = currentWrapper.offsetWidth / selectCountElement

      if (selectCountElement > 1) {
        width -= gap
      }

      setWidthElement(width)
    }

    changeWidthElement()

    window.addEventListener('resize', changeWidthElement)

    return () => {
      window.removeEventListener('resize', changeWidthElement)
    }
  }, [wrapperRef])

  useEffect(() => {
    if (!widthElement) return

    const indexElements = isCenter
      ? indexActiveElement - getCenterIndex()
      : indexActiveElement

    const translateX = (widthElement + gap) * indexElements

    setTranslateX(-translateX)
  }, [indexActiveElement, widthElement])

  return (
    <div className={styles.swiper} ref={wrapperRef}>
      <div
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          transform: `translateX(${translateX}px)`,
          gap: `${gap}px`
        }}
        className={styles.swiper__container}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        draggable={false}
      >
        {beforeElements}
        {target.map((item, index) => {
          const isActive = indexActiveElement === index

          const isNext = index === indexActiveElement + 1

          const isPrev = index === indexActiveElement - 1

          const options: IOptions = {
            isActive,
            isPrev,
            isNext,
            inView
          }

          return (
            <div
              className={cn(
                [styles.swiper__item],
                [!!elementClass, elementClass],
                [isActive, styles.swiper__item_active]
              )}
              style={{ flex: `1 0 ${widthElement}px` }}
              ref={ref}
            >
              {children(item, options, index)}
            </div>
          )
        })}
        {afterElements}
      </div>
      <button
        className={styles.swiper__button_prev}
        disabled={!hasPrevSwipe}
        onClick={swipePrev}
      >
        <ChevronLeft strokeWidth={1.5} size='large'></ChevronLeft>
      </button>
      <button
        className={styles.swiper__button_next}
        disabled={!hasNextSwipe}
        onClick={swipeNext}
      >
        <ChevronRight strokeWidth={1.5} size='large'></ChevronRight>
      </button>
    </div>
  )
}

export default Swiper
