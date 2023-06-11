import React, { useState } from 'react'
import HomeForm from './homeForm/HomeForm'
import styles from './Home.module.scss'
import HomeHeader from './homeHeader/HomeHeader'
import PostsList from './post/postList/PostsList'
import StoryList from './story/storyList/StoryList'
import ModalsContainer from './modalsContainer/ModalsContainer'

export default function Home() {

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<HomeHeader></HomeHeader>
				<div className={styles.story__container}>
					<StoryList></StoryList>
				</div>

				<div className={styles.creation__container}>
					<HomeForm></HomeForm>
				</div>

				<div className={styles.posts__container}>
					<PostsList></PostsList>
				</div>
			</div>
			<ModalsContainer></ModalsContainer>
		</div>
	)
}
