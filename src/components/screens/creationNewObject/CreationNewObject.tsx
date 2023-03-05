import React, { useState } from 'react'
import styles from './CreationNewObject.module.scss'
import { ReactComponent as Back } from '@assets/images/newPost/arrow-left.svg'
import { ReactComponent as Paperclip } from '@assets/images/newPost/paperclip.svg'
import Button from '@ui/Button/Button'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { ReactComponent as Clock } from '@assets/images/newPost/clock.svg'
import { ReactComponent as Image } from '@assets/images/newPost/image.svg'
import { ReactComponent as Inbox } from '@assets/images/newPost/inbox.svg'
import { ReactComponent as Mic } from '@assets/images/newPost/mic.svg'
import { ReactComponent as Video } from '@assets/images/newPost/video.svg'
import { ReactComponent as Vector } from '@assets/images/newPost/vector.svg'
import { classNames as cn } from '../../../utils/classNames/classNames'

const CreationNewObject = () => {
	const [isActiveActions, setIsActiveActions] = useState(false)
	const [countActiveButton, setCountActiveButton] = useState(1)

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.header__container}>
					<div className={styles.block}>
						<Back className={styles.block__back}></Back>
						<h2 className={styles.block__title}>Новый пост</h2>
					</div>
					<div className={styles.block__mobile}>
						<Vector className={styles.block__mobile_back}></Vector>
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
							<img className={styles.user__logo} src="https://avatars.mds.yandex.net/i?id=f214a777fc5e480a0004400014279d6d-3537590-images-thumbs&n=13" alt="HypeFans" />
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
					<div className={styles.actions}>
						<div className={styles.action}>
							<div
								onClick={() => {
									setIsActiveActions(state => (state = !state))
								}}
								className={styles.svg__container}
							>
								<Paperclip className={styles.action__svg}></Paperclip>
							</div>
							<div
								className={
									isActiveActions
										? cn([
												styles.action__container,
												styles.action__container_active,
										  ])
										: styles.action__container
								}
							>
								<div className={styles.action__content}>
									<div className={styles.action__item}>
										<Image className={styles.action__svg}></Image>
									</div>
									<div className={styles.action__item}>
										<Video className={styles.action__svg}></Video>
									</div>
									<div className={styles.action__item}>
										<Mic className={styles.action__svg}></Mic>
									</div>
									<div className={styles.action__item}>
										<Inbox className={styles.action__svg}></Inbox>
									</div>
									<div className={styles.action__item}>
										<Clock className={styles.action__svg}></Clock>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.submit__container}>
					<Button className={styles.submit}>Опубликовать</Button>
				</div>
			</div>
		</div>
	)
}

export default CreationNewObject
