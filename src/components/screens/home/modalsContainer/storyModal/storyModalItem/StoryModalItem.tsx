import React from 'react'
import styles from './StoryModalItem.module.scss'
import { IStory } from 'shared/interfaces/story.interface'
import StoryModalForm from './storyModalForm/StoryModalForm'
import ShortUserInfo from 'components/shared/shortUserInfo/ShortUserInfo'

interface IStoryModalItem {
	story: IStory
}

const StoryModalItem = ({ story }: IStoryModalItem) => {
	if (!story) return null

	const { user } = story

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<ShortUserInfo
					avatar={user.avatar}
					prefix={user.prefix}
					username={user.username}
				></ShortUserInfo>
				<StoryModalForm></StoryModalForm>
			</div>
		</div>
	)
}

export default StoryModalItem
