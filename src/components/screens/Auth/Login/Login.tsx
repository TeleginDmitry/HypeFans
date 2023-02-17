import React, {useState} from "react";
import styles from "./Login.module.scss";
import stylesAuth from "../Auth.module.scss";
import OtherEntrance from "../OtherEntrance/OtherEntrance";
import Input from "@ui/input/Input";
import { Link } from "react-router-dom";
import AuthButton from "@ui/authButton/AuthButton";

export default function Login() {
  const [isNextInput, setIsNextInput] = useState(false);

  return (
    <div className={stylesAuth.wrapper}>
      <div className={stylesAuth.titles}>
        <h1 className={stylesAuth.title}>Вход</h1>
        <p className={stylesAuth.question}>
          Нет аккаунта?{" "}
          <Link to="/registr" className={stylesAuth.question__style}>
            Создайте
          </Link>
        </p>
      </div>
      <form className={stylesAuth.form} action="">
        {isNextInput ? (
          <div className={stylesAuth.form__item}>
            <p className={stylesAuth.form__text}>Пароль</p>
            <Input placeholder="Введите свой пароль..."></Input>
            <div className={stylesAuth.button__conteiner}>
              <AuthButton>Войти</AuthButton>
            </div>
          </div>
        ) : (
          <div className={stylesAuth.form__item}>
            <p className={stylesAuth.form__text}>Email</p>
            <Input placeholder="Введите свой email..."></Input>
            <div className={stylesAuth.button__conteiner}>
              <AuthButton>Продолжить</AuthButton>
            </div>
          </div>
        )}
      </form>
      <OtherEntrance />
    </div>
  );
}
