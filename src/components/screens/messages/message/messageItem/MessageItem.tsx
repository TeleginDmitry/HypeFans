import React from "react";
import { useNavigate } from "react-router-dom";
import { IMessage } from "shared/interfaces/message.interface";
import styles from "./MessageItem.module.scss";

const MessageItem = ({ last__date, last__messages, user }: IMessage) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`?user=${user.id}`, { replace: false });
      }}
      className={styles.message}
    >
      <div className={styles.avatar__container}>
        <img className={styles.avatar} src={user.avatar} alt="HypeFans" />
      </div>
      <div className={styles.message__info}>
        <span className={styles.username}>{user.username}</span>
        <p className={styles.last__message}>{last__messages}</p>
      </div>
      <span className={styles.last__time}>{last__date}</span>
    </div>
  );
};

export default MessageItem;
