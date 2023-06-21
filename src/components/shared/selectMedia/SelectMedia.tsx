import React, { useState, ChangeEvent } from 'react'
import styles from './SelectMedia.module.scss'
import { ReactComponent as Clock } from '@assets/images/newPost/clock.svg'
import { ReactComponent as Image } from '@assets/images/newPost/image.svg'
import { ReactComponent as Inbox } from '@assets/images/newPost/inbox.svg'
import { ReactComponent as Mic } from '@assets/images/newPost/mic.svg'
import { ReactComponent as Video } from '@assets/images/newPost/video.svg'
import { ReactComponent as Paperclip } from '@assets/images/newPost/paperclip.svg'
import cn from '@utils/classNames/classNames'
import UploadFile from '@ui/uploadFile/UploadFile'

interface ISelectMedia {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SelectMedia = ({ onChange }: ISelectMedia) => {
	const [isActiveSelect, setIsActiveSelect] = useState(false)

	return (
		<div className={styles.wrapper}>
			<div className={styles.select}>
				<div
					onClick={() => {
						setIsActiveSelect(state => (state = !state))
					}}
					className={styles.svg__container}
				>
					<Paperclip className={styles.select__svg}></Paperclip>
				</div>
				<div
					className={cn(
						[styles.select__container],
						[isActiveSelect, styles.select__container_active]
					)}
				>
					<div className={styles.select__content}>
						<div className={styles.select__item}>
							<UploadFile onChange={onChange} multiple={true}>
								<Image className={styles.select__svg}></Image>
							</UploadFile>
						</div>
						<div className={styles.select__item}>
							<Video className={styles.select__svg}></Video>
						</div>
						<div className={styles.select__item}>
							<Mic className={styles.select__svg}></Mic>
						</div>
						<div className={styles.select__item}>
							<Inbox className={styles.select__svg}></Inbox>
						</div>
						<div className={styles.select__item}>
							<Clock className={styles.select__svg}></Clock>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SelectMedia
