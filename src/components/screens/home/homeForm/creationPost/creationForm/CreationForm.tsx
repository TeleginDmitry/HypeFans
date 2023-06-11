import React, { useEffect, useState } from 'react'
import styles from './CreationForm.module.scss'
import { ReactComponent as Search } from '@assets/images/homeHeader/search.svg'
import { ReactComponent as Send } from '@assets/images/send.svg'
import { ReactComponent as Image } from '@assets/images/newPost/image.svg'
import { ReactComponent as Video } from '@assets/images/newPost/video.svg'
import { AnimatePresence, motion } from 'framer-motion'
import TextareaInput from '@ui/textareaInput/TextareaInput'
import UploadFile from 'components/ui/uploadFile/UploadFile'
import useViewMedia from 'hooks/useViewUploadMedias'
import MediasList from 'components/shared/media/mediaList/MediasList'
import { classNames } from 'utils/classNames/classNames'

interface ICreationForm {
	changeStateActive: () => void
}

const CreationForm = ({ changeStateActive }: ICreationForm) => {
	const [valueInput, setValueInput] = useState('')
	const [isVisible, setIsVisible] = useState(false)

	const [viewMedias, setViewMedias, handlerMedia] = useViewMedia({
		isInfinity: true,
	})

	function handlerInputChange(input: React.ChangeEvent<HTMLTextAreaElement>) {
		setValueInput(input.target.value)
	}

	function handlerUploadviewMedias(input: React.ChangeEvent<HTMLInputElement>) {
		handlerMedia(input.target.files)
	}

	function deleteMedia(id: number) {
		setViewMedias(state => state.filter(media => media.id !== id))
	}

	useEffect(() => {
		if (valueInput) setIsVisible(true)
		else setIsVisible(false)
	}, [valueInput])

	return (
		<form className={styles.form}>
			<div
				className={
					valueInput
						? classNames([styles.creation, styles.creation__padding])
						: styles.creation
				}
			>
				<TextareaInput
					className={styles.creation__input}
					placeholder='Хей, о чем ты думаешь?'
					onChange={handlerInputChange}
					value={valueInput}
					minRows={1}
				></TextareaInput>

				<AnimatePresence>
					{(isVisible || !!viewMedias.length) && (
						<div className={styles.actions}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ delay: 0 * 0.1 }}
								className={styles.action}
							>
								<UploadFile multiple={true} onChange={handlerUploadviewMedias}>
									<Image />
								</UploadFile>
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ delay: 1 * 0.1 }}
								className={styles.action}
							>
								<Video />
							</motion.div>
						</div>
					)}
				</AnimatePresence>

				{!!viewMedias.length && (
					<MediasList
						medias={viewMedias}
						deleteMedia={deleteMedia}
					></MediasList>
				)}
			</div>
			<div className={styles.icon__container}>
				{isVisible ? (
					<Send className={styles.icon}></Send>
				) : (
					<Search onClick={changeStateActive} className={styles.icon}></Search>
				)}
			</div>
		</form>
	)
}

export default CreationForm
