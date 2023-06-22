import { useSearchParams } from 'react-router-dom'

import ConversationsList from './conversation/conversationsList/ConversationsList'
import CreationBlock from './creationBlock/CreationBlock'
import styles from './Messages.module.scss'
import Header from './header/Header'
import Chat from './chat/Chat'

const Messages = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header></Header>
        <div className={styles.container}>
          <ConversationsList></ConversationsList>
          <div className={styles.chat}>
            {!searchParams.has('user') ? (
              <CreationBlock></CreationBlock>
            ) : (
              <Chat></Chat>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
