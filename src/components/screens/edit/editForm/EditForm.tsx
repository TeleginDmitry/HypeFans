import React from "react";
import styles from "./EditForm.module.scss";
import Input from "@ui/input/Input";
import TextareaInput from "@ui/textareaInput/TextareaInput";
import { useFormik } from "formik";
import Button from "@ui/Button/Button";
import { IDataUser } from "shared/interfaces/user.interface";
import { PrefixService } from "services/prefix/Prefix.service";
import { AnimatePresence, motion } from "framer-motion";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";

interface IInitialValues {
  username: string;
  prefix: string;
  description: string;
  site: string;
}

interface IEditForm {
  background?: string | File;
  avatar?: string | File;
}

const validate = async (values: IInitialValues) => {
  const errors: Partial<IInitialValues> = {};

  if (!values.username) {
    errors.username = "Это поле обязательно для заполнения";
  }

  if (!values.prefix) {
    errors.prefix = "Это поле обязательно для заполнения";
  } else if (values.prefix.indexOf("@") === -1) {
    errors.prefix = "Это поле должно начинаться со знака @";
  }

  const response = await PrefixService.isUniquePrefix(values.prefix as string);

  if (!response.data.isUnique) {
    errors.prefix = "Введённый никнейм уже существует";
  }

  if (values?.description && values.description.length > 1000) {
    errors.description = "Описание не может превышать 1000 символов";
  }

  if (values?.site && !/^(ftp|http|https):\/\/[^ "]+$/.test(values.site)) {
    errors.site = "Неверный формат ссылки на сайт";
  }

  return errors;
};

const EditForm = ({ avatar, background }: IEditForm) => {
  const user = useTypedSelector((state) => state.auth.user);
  const { changeUser } = useActions();

  const initialValues: IInitialValues = {
    username: "",
    prefix: "",
    description: "",
    site: "",
  };

  const formik = useFormik<IInitialValues>({
    initialValues,
    validate,
    onSubmit: onSubmitForm,
  });

  function onSubmitForm(values: IInitialValues) {
    const formData = new FormData();

    if (values?.site) {
      formData.append("site", values.site);
    }

    if (values?.username) {
      formData.append("username", values.username);
    }
    if (values?.prefix) {
      formData.append("prefix", values.prefix);
    }

    if (!!avatar) {
      formData.append("avatar", avatar);
    }
    if (!!background) {
      formData.append("background", background);
    }

    if (user?.id) {
      changeUser({ id: user.id, data: formData as unknown as IDataUser });
    }
  }

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.form__item}>
        <label htmlFor="username">Имя</label>
        <Input
          type="text"
          id="username"
          placeholder={user?.username || "Укажите своё Имя/Фамилию..."}
          onChange={formik.handleChange}
          isWrong={!!(formik.touched.username && formik.errors.username)}
          {...formik.getFieldProps("username")}
        ></Input>
        <AnimatePresence>
          {formik.touched.username && formik.errors.username && (
            <motion.div
              className={styles.form__error}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {formik.errors.username}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.form__item}>
        <label htmlFor="prefix">Ник</label>
        <Input
          type="text"
          id="prefix"
          placeholder={user?.prefix || "Придумайте свой никнейм..."}
          onChange={formik.handleChange}
          isWrong={!!(formik.touched.prefix && formik.errors.prefix)}
          {...formik.getFieldProps("prefix")}
        ></Input>
        <AnimatePresence>
          {formik.touched.prefix && formik.errors.prefix && (
            <motion.div
              className={styles.form__error}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {formik.errors.prefix}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.form__item}>
        <label htmlFor="description">Био</label>
        <TextareaInput
          id="description"
          minRows={4}
          placeholder={user?.description || "Запишите свою биографию..."}
          onChange={formik.handleChange}
          isWrong={!!(formik.touched.description && formik.errors.description)}
          {...formik.getFieldProps("description")}
        ></TextareaInput>
        <AnimatePresence>
          {formik.touched.description && formik.errors.description && (
            <motion.div
              className={styles.form__error}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {formik.errors.description}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.form__item}>
        <div className={styles.form__item}>
          <label htmlFor="site">Сайт</label>
          <Input
            type="url"
            id="site"
            placeholder={user?.site || "Введите ссылку на ваш сайт..."}
            onChange={formik.handleChange}
            isWrong={!!(formik.touched.site && formik.errors.site)}
            {...formik.getFieldProps("site")}
          ></Input>
          <AnimatePresence>
            {formik.touched.site && formik.errors.site && (
              <motion.div
                className={styles.form__error}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {formik.errors.site}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.button__container}>
        <Button type="submit">Сохранить</Button>
      </div>
    </form>
  );
};

export default EditForm;
