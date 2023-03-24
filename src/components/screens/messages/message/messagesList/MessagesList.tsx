import React from "react";
import MessageItem from "../messageItem/MessageItem";
import { dataMessages } from "./data";
import styles from "./MessagesList.module.scss";

const MessagesList = () => {
  return (
    <ul className={styles.messages}>
      {dataMessages.map((item) => {
        return <MessageItem {...item}></MessageItem>;
      })}
    </ul>
  );
};

export default MessagesList;
