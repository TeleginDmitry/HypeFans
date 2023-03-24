import React from "react";
import styles from "./HeaderMessages.module.scss";
import { ReactComponent as Exit } from "@assets/images/newPost/arrow-left.svg";
import { ReactComponent as Plus } from "@assets/images/messages/plus.svg";
import { ReactComponent as Users } from "@assets/images/messages/users.svg";

const HeaderMessages = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__flex}>
        <Exit className={styles.header__svg}></Exit>
        <h2 className={styles.header__title}>Сообщения</h2>
      </div>
      <div className={styles.header__flex}>
        <Plus className={styles.header__svg}></Plus>
        <Users className={styles.header__svg}></Users>
      </div>
    </div>
  );
};

export default HeaderMessages;
