import React, { useState } from "react";
import styles from "./Login.module.scss";
import stylesAuth from "../Auth.module.scss";
import OtherEntrance from "../OtherEntrance/OtherEntrance";
import Input from "@ui/input/Input";
import { Link } from "react-router-dom";
import AuthButton from "@ui/Button/Button";
import logo from "@assets/images/auth/logoBlack.png";
import { useFormik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { emailRegex } from "shared/regex";
import useActions from "hooks/useActions";

interface IInitialValues {
  email: string;
  password: string;
}

const initialValues: IInitialValues = {
  email: "",
  password: "",
};

const validate = (values: IInitialValues) => {
  const errors: Partial<IInitialValues> = {};

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

export default function Login() {
  const { login } = useActions();

  const formik = useFormik<IInitialValues>({
    initialValues,
    validate,
    onSubmit: onSubmitFunction,
  });

  async function onSubmitFunction(values: IInitialValues) {
    await login(values);
  }

  return (
    <div className={stylesAuth.wrapper}>
      <div className={stylesAuth.titles}>
        <h1 className={stylesAuth.title}>Вход</h1>
        <p className={stylesAuth.question}>
          Нет аккаунта?{" "}
          <Link to="/registration" className={stylesAuth.question__style}>
            Создайте
          </Link>
        </p>
      </div>
      <div className={stylesAuth.form__container_logo}>
        <img className={stylesAuth.form__logo} src={logo} alt="HypeFans" />
      </div>
      <form className={stylesAuth.form} onSubmit={formik.handleSubmit}>
        <div className={stylesAuth.form__wrapper}>
          <div className={stylesAuth.form__input_content}>
            <p className={stylesAuth.form__text}>Email</p>
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
            <p className={stylesAuth.form__text}>Пароль</p>
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
          <Link to={"/registration"} className={stylesAuth.question__style}>
            Забыли пароль?
          </Link>
          <div className={stylesAuth.other}>
            <OtherEntrance />
          </div>
          <div className={stylesAuth.button__container}>
            <AuthButton type="submit">Войти</AuthButton>
          </div>
        </div>
      </form>
      <div className={stylesAuth.other}>
        <OtherEntrance />
      </div>
    </div>
  );
}
