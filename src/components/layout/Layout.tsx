import Header from "./header/Header";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";


export function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <div className={styles.content}>
        <Outlet />
      </div>
      
    </div>
  );
}


