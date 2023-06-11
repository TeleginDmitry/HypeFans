import React from 'react'
import { ReactComponent as BookmarkSvg } from '@assets/images/post/bookmark.svg'
import styles from './Bookmark.module.scss'

const Bookmark = () => {
	return <BookmarkSvg className={styles.bookmark}></BookmarkSvg>
}

export default Bookmark
