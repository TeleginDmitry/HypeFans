import Button from "components/ui/Button/Button";
import { useSearchParams } from "react-router-dom";
import CreationBlock from "./creationBlock/CreationBlock";
import HeaderMessages from "./header/HeaderMessages";
import MessagesList from "./message/messagesList/MessagesList";
import styles from "./Messages.module.scss";

const Messages = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('user'))
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <HeaderMessages></HeaderMessages>
        <div className={styles.container}>
          <MessagesList></MessagesList>
          <div className={styles.chat}>
            {!searchParams.has('user') && <CreationBlock></CreationBlock>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
