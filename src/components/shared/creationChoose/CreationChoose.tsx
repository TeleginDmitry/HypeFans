import React, { useEffect } from 'react'
import styles from './CreationChoose.module.scss'
import { useSearchParams } from 'react-router-dom'
import {
	CREATE_PARAM,
	CREATE_POST_VALUE,
	CREATE_STORY_VALUE,
} from 'configs/index.config'
import {
	creationDefaultColor,
	creationGrayColor,
	returnStylesByСondition,
} from 'shared/creationsChooseVariableColors'

interface ICreationChoose {
	theme?: 'gray'
}

const CreationChoose = ({ theme }: ICreationChoose) => {
	const [URLSearchParams, setURLSearchParams] = useSearchParams()

	const createParam = URLSearchParams.get(CREATE_PARAM)

	function handlerClickCreatePost() {
		URLSearchParams.set(CREATE_PARAM, CREATE_POST_VALUE)
		setURLSearchParams(URLSearchParams)
	}

	function handlerClickCreateStory() {
		URLSearchParams.set(CREATE_PARAM, CREATE_STORY_VALUE)
		setURLSearchParams(URLSearchParams)
	}

	useEffect(() => {
		if (
			createParam !== null &&
			createParam !== CREATE_STORY_VALUE &&
			createParam !== CREATE_POST_VALUE
		) {
			URLSearchParams.delete(CREATE_PARAM)
			setURLSearchParams(URLSearchParams)
		}
	}, [createParam])

	const colors = theme === 'gray' ? creationGrayColor : creationDefaultColor

	return (
		<div
			style={{ backgroundColor: colors.wrapperBackground }}
			className={styles.wrapper}
		>
			<button
				onClick={handlerClickCreatePost}
				className={styles.button}
				style={returnStylesByСondition(
					createParam === CREATE_POST_VALUE || createParam === null,
					colors
				)}
			>
				Новый пост
			</button>
			<button
				onClick={handlerClickCreateStory}
				className={styles.button}
				style={returnStylesByСondition(
					createParam === CREATE_STORY_VALUE,
					colors
				)}
			>
				Новая история
			</button>
		</div>
	)
}

export default CreationChoose
