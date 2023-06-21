import React from 'react'
import { ReactComponent as BookmarkSvg } from '@assets/images/post/bookmark.svg'
import styles from './Bookmark.module.scss'
import { IActionsVariablesSize } from '../actionsVariables.interface'
import { actionsStyles } from 'utils/actionsStyles/ActionsStyles'

interface IBookmark extends IActionsVariablesSize {}

const Bookmark = ({ size = 'medium' }: IBookmark) => {
	return (
		<BookmarkSvg
			style={actionsStyles({ size })}
			className={styles.bookmark}
		></BookmarkSvg>
	)
}

export default Bookmark
