import { ReactComponent as BookmarkSvg } from '@assets/images/post/bookmark.svg'
import { actionsStyles } from 'utils/actionsStyles/ActionsStyles'
import React from 'react'

import { IActionsVariablesSize } from '../actionsVariables.interface'
import styles from './Bookmark.module.scss'

type IBookmark = IActionsVariablesSize

const Bookmark = ({ size = 'medium' }: IBookmark) => {
  return (
    <BookmarkSvg
      style={actionsStyles({ size })}
      className={styles.bookmark}
    ></BookmarkSvg>
  )
}

export default Bookmark
