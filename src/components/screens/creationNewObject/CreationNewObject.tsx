import React, { useState } from 'react'
import styles from './CreationNewObject.module.scss'
import { ReactComponent as Back } from '@assets/images/newPost/arrow-left.svg'
import Button from '@ui/button/Button'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { ReactComponent as Vector } from '@assets/images/newPost/vector.svg'
import { classNames as cn } from '@utils/classNames/classNames'
import { useNavigate } from 'react-router-dom'
import SelectMedia from 'components/shared/selectMedia/SelectMedia'
import viewMedia, { IViewMedia } from 'utils/viewMedia/ViewMedia'
import MediasList from 'components/shared/media/mediaList/MediasList'

const CreationNewObject = () => {
	const navigate = useNavigate()

	const [countActiveButton, setCountActiveButton] = useState(1)
	const [medias, setMedias] = useState<IViewMedia[]>([])

	function deleteMedia(id: string) {
		setMedias(state => state.filter(media => media.id !== id))
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.header__container}>
					<div className={styles.block}>
						<Back
							onClick={() => {
								navigate(-1)
							}}
							className={styles.block__back}
						></Back>
						<h2 className={styles.block__title}>Новый пост</h2>
					</div>
					<div className={styles.block__mobile}>
						<Vector
							onClick={() => {
								navigate(-1)
							}}
							className={styles.block__mobile_back}
						></Vector>
						<h2 className={styles.block__mobile_title}>Создать</h2>
					</div>
				</div>
				<div className={styles.buttons__container}>
					<button
						onClick={() => {
							setCountActiveButton(1)
						}}
						className={
							countActiveButton === 1
								? cn([styles.button, styles.button__active])
								: styles.button
						}
					>
						Новый пост
					</button>
					<button
						onClick={() => {
							setCountActiveButton(2)
						}}
						className={
							countActiveButton === 2
								? cn([styles.button, styles.button__active])
								: styles.button
						}
					>
						Новая история
					</button>
				</div>
				<div className={styles.user}>
					<div className={styles.user__logo_container}>
						<img
							className={styles.user__logo}
							src='https://avatars.mds.yandex.net/i?id=f214a777fc5e480a0004400014279d6d-3537590-images-thumbs&n=13'
							alt='HypeFans'
						/>
					</div>
					<div className={styles.user__username_container}>
						<span className={styles.user__username}>Вероника Топаз</span>
					</div>
				</div>
				<div className={styles.input__content}>
					<div className={styles.input__container}>
						<ReactTextareaAutosize
							placeholder='Поделитесь своими мыслями...'
							minRows={8}
							className={styles.input}
						/>
					</div>
					<MediasList medias={medias} deleteMedia={deleteMedia}></MediasList>
					<SelectMedia
						onChange={({ target }) => viewMedia([...target.files], setMedias)}
					></SelectMedia>
				</div>
				<div className={styles.submit__container}>
					<Button>Опубликовать</Button>
				</div>
			</div>
		</div>
	)
}

export default CreationNewObject
