import React from 'react'
import CreationPost from './creationPost/CreationPost'
import styles from './Home.module.scss'
import HomeHeader from './homeHeader/HomeHeader'
import PostsList from './post/postList/PostsList'
import StoryList from './story/storyList/StoryList'

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<HomeHeader></HomeHeader>
				<div className={styles.story__container}>
					<StoryList></StoryList>
				</div>
				<div className={styles.creation__container}>
					<CreationPost></CreationPost>
				</div>

				<div className={styles.posts__container}>
					<PostsList></PostsList>
				</div>
			</div>
		</div>
	)
}
