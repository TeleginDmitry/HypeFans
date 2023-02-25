import React from 'react'
import styles from './Home.module.scss'
import HomeHeader from './homeHeader/HomeHeader'
import PostsList from './post/postList/PostsList'
import StoryList from './story/storyList/StoryList'


export default function Home() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<HomeHeader></HomeHeader>
				<div className={styles.story__list}>
					<StoryList></StoryList>
				</div>
				<div className={styles.posts__list}>
					<PostsList></PostsList>
				</div>
			</div>
		</div>
	)
}
