import React from 'react'
import { IStory } from '../story.interface'
import styles from './StoryItem.module.scss'
import 'swiper/css'

export function StoryItem({ prefix, avatar }: IStory) {
	return (
		<div className={styles.story}>
			<div className={styles.avatar__container}>
				<img className={styles.avatar} src={avatar} alt='HypeFans' />
			</div>
			<div className={styles.prefix__container}>
				<span className={styles.prefix}>{prefix}</span>
			</div>
		</div>
	)
}
