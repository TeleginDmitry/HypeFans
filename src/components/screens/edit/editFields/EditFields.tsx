import ValidateField from 'components/shared/validateField/ValidateField'
import TextareaInput from '@ui/textareaInput/TextareaInput'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { Input } from 'ui-hypefans-lib'
import { FormikProps } from 'formik'
import React from 'react'

import { IInitialValues } from '../editForm/EditForm.interface'
import styles from './EditFields.module.scss'

interface IEditFields {
  formik: FormikProps<IInitialValues>
}

const EditFields = ({ formik }: IEditFields) => {
  const user = useTypedSelector((state) => state.auth.user)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Input
          isWrong={!!(formik.touched.username && formik.errors.username)}
          placeholder={user?.username || 'Укажите своё Имя/Фамилию...'}
          onChange={formik.handleChange}
          id='username'
          label='Имя'
          type='text'
          {...formik.getFieldProps('username')}
        ></Input>
        <ValidateField
          isTouched={formik.touched.username}
          error={formik.errors.username}
        ></ValidateField>
      </div>
      <div className={styles.container}>
        <Input
          isWrong={!!(formik.touched.prefix && formik.errors.prefix)}
          placeholder={user?.prefix || 'Придумайте свой никнейм...'}
          onChange={formik.handleChange}
          label='Ник'
          id='prefix'
          type='text'
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
          isWrong={!!(formik.touched.description && formik.errors.description)}
          // lab='Имя'
          placeholder={user?.description || 'Запишите свою биографию...'}
          onChange={formik.handleChange}
          id='description'
          minRows={4}
          {...formik.getFieldProps('description')}
        ></TextareaInput>
        <ValidateField
          isTouched={formik.touched.description}
          error={formik.errors.description}
        ></ValidateField>
      </div>
      <div className={styles.container}>
        <Input
          placeholder={user?.site || 'Введите ссылку на ваш сайт...'}
          isWrong={!!(formik.touched.site && formik.errors.site)}
          onChange={formik.handleChange}
          label='Сайт'
          type='url'
          id='site'
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
