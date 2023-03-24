import background from "@assets/images/auth/background.jpg";
import logo from "@assets/images/auth/logo.png";
import styles from "./AuthLayout.module.scss";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background__content}>
        <img className={styles.background} src={background} alt="HypeFans" />
      </div>
      <div className={styles.content}>
        <div className={styles.logo__content}>
          <img draggable={false} className={styles.logo} src={logo} alt="HypeFans" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}