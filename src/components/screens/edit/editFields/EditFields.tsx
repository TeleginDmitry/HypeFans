import React from 'react'
import styles from './EditFields.module.scss'
import Input from '@ui/input/Input'
import TextareaInput from '@ui/textareaInput/TextareaInput'
import ValidateField from 'components/shared/validateField/ValidateField'
import { FormikProps } from 'formik'
import { IInitialValues } from '../editForm/EditForm.interface'
import { useTypedSelector } from 'hooks/useTypedSelector'

interface IEditFields {
	formik: FormikProps<IInitialValues>
}

const EditFields = ({ formik }: IEditFields) => {
	const user = useTypedSelector(state => state.auth.user)

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<label htmlFor='username'>Имя</label>
				<Input
					type='text'
					id='username'
					placeholder={user?.username || 'Укажите своё Имя/Фамилию...'}
					onChange={formik.handleChange}
					isWrong={!!(formik.touched.username && formik.errors.username)}
					{...formik.getFieldProps('username')}
				></Input>
				<ValidateField
					isTouched={formik.touched.username}
					error={formik.errors.username}
				></ValidateField>
			</div>
			<div className={styles.container}>
				<label htmlFor='prefix'>Ник</label>
				<Input
					type='text'
					id='prefix'
					placeholder={user?.prefix || 'Придумайте свой никнейм...'}
					onChange={formik.handleChange}
					isWrong={!!(formik.touched.prefix && formik.errors.prefix)}
					{...formik.getFieldProps('prefix')}
				></Input>
				<ValidateField
					isTouched={formik.touched.prefix}
					error={formik.errors.prefix}
				></ValidateField>
			</div>
			<div className={styles.container}>
				<label htmlFor='description'>Био</label>
				<TextareaInput
					id='description'
					minRows={4}
					placeholder={user?.description || 'Запишите свою биографию...'}
					onChange={formik.handleChange}
					isWrong={!!(formik.touched.description && formik.errors.description)}
					{...formik.getFieldProps('description')}
				></TextareaInput>
				<ValidateField
					isTouched={formik.touched.description}
					error={formik.errors.description}
				></ValidateField>
			</div>
			<div className={styles.container}>
				<label htmlFor='site'>Сайт</label>
				<Input
					type='url'
					id='site'
					placeholder={user?.site || 'Введите ссылку на ваш сайт...'}
					onChange={formik.handleChange}
					isWrong={!!(formik.touched.site && formik.errors.site)}
					{...formik.getFieldProps('site')}
				></Input>
				<ValidateField
					isTouched={formik.touched.site}
					error={formik.errors.site}
				></ValidateField>
			</div>
		</div>
	)
}

export default EditFields
