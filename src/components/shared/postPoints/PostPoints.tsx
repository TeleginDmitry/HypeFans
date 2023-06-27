import { DotsVertical } from 'icons-hypefans-lib'
import React, { useState } from 'react'

import styles from './PostPoints.module.scss'

interface IPostPoints {
  children: React.ReactNode
}

const PostPoints = ({ children }: IPostPoints) => {
  const [isVisibleActions, setIsVisibleActions] = useState(false)

  function changeStateActions() {
    setIsVisibleActions((state) => !state)
  }

  return (
    <div className={styles.wrapper}>
      <DotsVertical onClick={changeStateActions}></DotsVertical>
      {isVisibleActions && children}
    </div>
  )
}

export default PostPoints
