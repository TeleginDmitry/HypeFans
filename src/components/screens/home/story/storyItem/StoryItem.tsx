import React from 'react'
import { IStory } from '../story.interface'
import styles from './StoryItem.module.scss'
import 'swiper/css'
import { classNames as cn } from '../../../../../utils/classNames/classNames'

export function StoryItem({ user, avatar, isMyStory }: IStory) {
	return (
		<div className={styles.story}>
			<div className={ isMyStory ? cn([styles.avatar__container, styles.avatar__myStory]) : styles.avatar__container }>
				<img className={styles.avatar} src={avatar} alt='HypeFans' />
			</div>
			<div className={styles.prefix__container}>
				{ isMyStory ? <span className={styles.prefix__myStory}>Твоя истоия</span> : <span className={styles.prefix}>{user.prefix}</span>}
				
				
			</div>
		</div>
	)
}
