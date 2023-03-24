import React, { useState, ChangeEvent } from 'react'
import styles from './CreationNewObject.module.scss'
import { ReactComponent as Back } from '@assets/images/newPost/arrow-left.svg'
import Button from '@ui/Button/Button'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { ReactComponent as Vector } from '@assets/images/newPost/vector.svg'
import { classNames as cn } from '../../../utils/classNames/classNames'
import { useNavigate } from 'react-router-dom'
import SelectMedia from '../../shared/selectMedia/SelectMedia'

const CreationNewObject = () => {
	const navigate = useNavigate()

	const [countActiveButton, setCountActiveButton] = useState(1)
	const [medias, setMedias] = useState<File[]>([])

	function handlerOnChangeMedias(input: ChangeEvent<HTMLInputElement>) {
		const files = input.target.files

		if (!!files) {
			for (let i = 0; i < files?.length; i++) {
				setMedias(state => [...state, files[i]])
			}
		}
	}
	console.log(medias)

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
					<SelectMedia onChange={handlerOnChangeMedias}></SelectMedia>
				</div>
				<div className={styles.submit__container}>
					<Button className={styles.submit}>Опубликовать</Button>
				</div>
			</div>
		</div>
	)
}

export default CreationNewObject
