import { PrefixService } from 'services/prefix/Prefix.service'
import { IDataUser } from 'shared/interfaces/user.interface'
import { useTypedSelector } from 'hooks/useTypedSelector'
import useActions from 'hooks/useActions'
import { Button } from 'ui-hypefans-lib'
import { useFormik } from 'formik'
import React from 'react'

import { IInitialValues } from './EditForm.interface'
import EditFields from '../editFields/EditFields'
import styles from './EditForm.module.scss'

interface IEditForm {
  background: File
  avatar: File
}

const validate = async (values: IInitialValues) => {
  const errors: Partial<IInitialValues> = {}

  if (!values.username) {
    errors.username = 'Это поле обязательно для заполнения'
  }

  if (!values.prefix) {
    errors.prefix = 'Это поле обязательно для заполнения'
  } else if (values.prefix.indexOf('@') === -1) {
    errors.prefix = 'Это поле должно начинаться со знака @'
  }

  const response = await PrefixService.isUniquePrefix(values.prefix as string)

  if (!response.data.isUnique) {
    errors.prefix = 'Введённый никнейм уже существует'
  }

  if (values?.description && values.description.length > 1000) {
    errors.description = 'Описание не может превышать 1000 символов'
  }

  if (values?.site && !/^(ftp|http|https):\/\/[^ "]+$/.test(values.site)) {
    errors.site = 'Неверный формат ссылки на сайт'
  }

  return errors
}

const EditForm = ({ background, avatar }: IEditForm) => {
  const user_id = useTypedSelector((state) => state.auth.user?.id)
  const { changeUser } = useActions()

  const initialValues: IInitialValues = {
    description: '',
    username: '',
    prefix: '',
    site: ''
  }

  const formik = useFormik<IInitialValues>({
    onSubmit: onSubmitForm,
    initialValues,
    validate
  })

  function onSubmitForm(values: IInitialValues) {
    const formData = new FormData()

    if (values?.site) {
      formData.append('site', values.site)
    }

    if (values?.username) {
      formData.append('username', values.username)
    }
    if (values?.prefix) {
      formData.append('prefix', values.prefix)
    }

    if (avatar) {
      formData.append('avatar', avatar)
    }
    if (background) {
      formData.append('background', background)
    }

    if (user_id) {
      changeUser({ data: formData as unknown as IDataUser, id: user_id })
    }
  }

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <EditFields formik={formik} />

      <Button className={styles.button} type='submit'>
        Сохранить
      </Button>
    </form>
  )
}

export default EditForm
