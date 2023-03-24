import React, { useState, ChangeEvent } from 'react'
import styles from './Edit.module.scss'
import { ReactComponent as Clear } from '@assets/images/newPost/arrow-left.svg'
import { ReactComponent as Points } from '@assets/images/profile/points.svg'
import { ReactComponent as Camera } from '@assets/images/edit/camera.svg'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/ReduxHooks'
import { API_URL } from '../../../configs/api.config'
import EditForm from './editForm/EditForm'
import UploadFile from '../../ui/UploadFile/UploadFile'
import viewMedia, { IViewMedia } from '../../../utils/viewMedia/ViewMedia'

const Edit = () => {
	const navigate = useNavigate()

	const { isAuth, user } = useAppSelector(state => state.auth)

	const [inputFileBackground, setInputFileBackground] = useState<IViewMedia>({
		linkView: '',
		uploadFile: '',
	})

	const [inputFileAvatar, setInputFileAvatar] = useState<IViewMedia>({
		linkView: '',
		uploadFile: '',
	})
	

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.user__medias}>
					<div className={styles.background__container}>
						{(inputFileBackground?.linkView || user?.background) && (
							<img
								className={styles.background}
								src={inputFileBackground?.linkView || API_URL + user?.background}
								alt='HypeFans'
							/>
						)}

						<Clear
							onClick={() => {
								navigate(-1)
							}}
							className={styles.background__back}
						></Clear>
						<Points className={styles.background__points}></Points>
						<UploadFile
							onChange={input =>
								viewMedia(input.target.files?.[0], setInputFileBackground)
							}
							wrapperClass={styles.wrapper__camera}
						>
							<Camera className={styles.camera}></Camera>
						</UploadFile>
					</div>
					<div className={styles.avatar__content}>
						<div className={styles.avatar__container}>
							<img
								className={styles.avatar}
								src={ inputFileAvatar?.linkView || API_URL + user?.avatar}
								alt='HypeFans'
							/>
							<UploadFile
								onChange={input =>
									viewMedia(input.target.files?.[0], setInputFileAvatar)
								}
								wrapperClass={styles.wrapper__camera}
							>
								<Camera className={styles.camera}></Camera>
							</UploadFile>
						</div>
					</div>
				</div>
				<div className={styles.form__container}>
					{isAuth && (
						<EditForm
							background={inputFileBackground.uploadFile}
							avatar={inputFileAvatar.uploadFile}
						></EditForm>
					)}
				</div>
			</div>
		</div>
	)
}

export default Edit
