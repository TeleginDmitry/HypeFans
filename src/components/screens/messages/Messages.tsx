import Button from "components/ui/button/Button";
import { useSearchParams } from "react-router-dom";
import Chat from "./chat/Chat";
import CreationBlock from "./creationBlock/CreationBlock";
import Header from "./header/Header";
import ConversationsList from "./conversation/conversationsList/ConversationsList"
import styles from "./Messages.module.scss";

const Messages = () => {

  const [searchParams, setSearchParams] = useSearchParams();


  
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header></Header>
        <div className={styles.container}>
          <ConversationsList></ConversationsList>
          <div className={styles.chat}>
            {!searchParams.has('user') ? <CreationBlock></CreationBlock> : <Chat></Chat>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
