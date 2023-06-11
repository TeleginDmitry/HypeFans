import React from "react";
import styles from "./CreationBlock.module.scss";
import { Button } from 'ui-hypefans-lib'

const CreationBlock = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Выберите диалог или создайте новый</p>
      <Button>Новое сообщение</Button>
    </div>
  );
};

export default CreationBlock;