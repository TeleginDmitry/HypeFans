import React, { useState } from "react";
import styles from "./Registr.module.scss";
import stylesAuth from "../Auth.module.scss";
import { Link } from "react-router-dom";
import Input from "@ui/input/Input";
import AuthButton from "@ui/Button/Button";
import { useFormik } from "formik";
import logo from "@assets/images/auth/logoBlack.png";
import { AnimatePresence, motion } from "framer-motion";
import { emailRegex } from "shared/regex";
import useActions from "hooks/useActions";
import OtherEntrance from "../OtherEntrance/OtherEntrance";

interface IInitialValues {
  username: string;
  email: string;
  password: string;
}

const initialValues: IInitialValues = {
  email: "",
  username: "",
  password: "",
};

const validate = (values: IInitialValues) => {
  const errors: Partial<IInitialValues> = {};

  if (!values.username) {
    errors.username = "Это поле обязательно для заполнения";
  }

  if (!values.email) {
    errors.email = "Это поле обязательно для заполнения";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Неверный формат эл.почты";
  }

  if (!values.password) {
    errors.password = "Это поле обязательно для заполнения";
  } else if (values.password.length < 5) {
    errors.password = "Пароль не должен быть меньше 5 символов";
  }

  return errors;
};

export default function Register() {
  const { register } = useActions();

  const formik = useFormik<IInitialValues>({
    initialValues,
    validate,
    onSubmit: onSubmitFunction,
  });

  async function onSubmitFunction(values: IInitialValues) {
    await register(values);
  }

  return (
    <div className={stylesAuth.wrapper}>
      <div className={stylesAuth.titles}>
        <h1 className={stylesAuth.title}>Регистрация</h1>
        <p className={stylesAuth.question}>
          Уже есть аккаунт?{" "}
          <Link to="/login" replace={false} className={stylesAuth.question__style}>
            Войдите
          </Link>
        </p>
      </div>
      <div className={stylesAuth.form__container_logo}>
        <img className={stylesAuth.form__logo} src={logo} alt="HypeFans" />
      </div>
      <form className={stylesAuth.form} onSubmit={formik.handleSubmit}>
        <div className={stylesAuth.form__wrapper}>
          <div className={stylesAuth.form__input_content}>
            <label htmlFor="email" className={stylesAuth.form__text}>
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Введите свой email..."
              onChange={formik.handleChange}
              {...formik.getFieldProps("email")}
            ></Input>
            <AnimatePresence>
              {formik.touched.email && formik.errors.email && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {formik.errors.email}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={stylesAuth.form__input_content}>
            <label htmlFor="password" className={stylesAuth.form__text}>
              Пароль
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Введите свой пароль..."
              onChange={formik.handleChange}
              {...formik.getFieldProps("password")}
            ></Input>
            <AnimatePresence>
              {formik.touched.password && formik.errors.password && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {formik.errors.password}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className={stylesAuth.form__input_content}>
            <label htmlFor="username" className={stylesAuth.form__text}>
              Имя
            </label>
            <Input
              id="username"
              type="username"
              placeholder="Введите своё имя..."
              onChange={formik.handleChange}
              {...formik.getFieldProps("username")}
            ></Input>
            <AnimatePresence>
              {formik.touched.username && formik.errors.username && (
                <motion.div
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

          <div className={stylesAuth.button__container}>
            <AuthButton>Создать</AuthButton>
          </div>
        </div>
      </form>
	  <div className={stylesAuth.other}>
        <OtherEntrance />
      </div>
    </div>
  );
}
