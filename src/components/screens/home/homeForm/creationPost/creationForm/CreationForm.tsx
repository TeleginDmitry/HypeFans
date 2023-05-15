import React, { useEffect, useState } from 'react'
import styles from './CreationForm.module.scss'
import { ReactComponent as Search } from '@assets/images/homeHeader/search.svg'
import { ReactComponent as Send } from '@assets/images/send.svg'
import { ReactComponent as Image } from '@assets/images/newPost/image.svg'
import { ReactComponent as Video } from '@assets/images/newPost/video.svg'
import { AnimatePresence, motion } from 'framer-motion'
import TextareaInput from '@ui/textareaInput/TextareaInput'
import UploadFile from 'components/ui/uploadFile/UploadFile'
import useViewMedia from 'hooks/useViewMedia'

interface ICreationForm {
	changeStateActive: () => void
}

const iconsForm = [
	{
		id: 1,
		Icon: (
			<UploadFile>
				<Image />
			</UploadFile>
		),
	},
	{
		id: 2,
		Icon: <Video />,
	},
]

const CreationForm = ({ changeStateActive }: ICreationForm) => {
	const [valueInput, setValueInput] = useState('')
	const [isVisible, setIsVisible] = useState(false)

	const { handlerMedia, resultMedias } = useViewMedia()

	function handlerInputChange(input: React.ChangeEvent<HTMLTextAreaElement>) {
		setValueInput(input.target.value)
	}

	function handlerUploadMedias(event: React.ChangeEvent<HTMLInputElement>) {
		handlerMedia([...event.target.files])
	}
	useEffect(() => {
		if (valueInput) setIsVisible(true)
		else setIsVisible(false)
	}, [valueInput])

	return (
		<form className={styles.form}>
			<div className={styles.creation}>
				<TextareaInput
					className={styles.creation__input}
					placeholder='Хей, о чем ты думаешь?'
					onChange={handlerInputChange}
					value={valueInput}
					minRows={1}
				></TextareaInput>

				<AnimatePresence>
					{(isVisible || !!resultMedias.length) && (
						<div className={styles.actions}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ delay: 0 * 0.1 }}
								className={styles.action}
							>
								<UploadFile multiple={true} onChange={handlerUploadMedias}>
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

				{!!resultMedias.length && (
					<div className={styles.images}>
						{resultMedias.map(media => {
							return (
								<img
									className={styles.image}
									key={media.id}
									src={media.linkView}
									alt=''
								/>
							)
						})}
					</div>
				)}
			</div>
			<div onClick={changeStateActive} className={styles.icon__container}>
				{isVisible ? (
					<Send className={styles.icon}></Send>
				) : (
					<Search className={styles.icon}></Search>
				)}
			</div>
		</form>
	)
}

export default CreationForm
