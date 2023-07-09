import { DotsVertical } from 'icons-hypefans-lib'
import React, { useState } from 'react'

import styles from './Points.module.scss'

interface IPoints {
  children: React.ReactNode
}

const Points = ({ children }: IPoints) => {
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

export default Points
