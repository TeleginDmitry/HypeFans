import { ReactComponent as Message } from '@assets/images/profile/message.svg'
import { ReactComponent as Share } from '@assets/images/profile/share.svg'
import { ReactComponent as Frame } from '@assets/images/profile/frame.svg'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { IUser } from 'shared/interfaces/user.interface'
import { chatService } from 'services/chat/chat.service'
import { SERVER_URL } from 'configs/api.config'
import cn from '@utils/classNames/classNames'

import styles from './ProfileInfo.module.scss'

interface IProfileInfo {
  isMyProfile?: boolean
  user: IUser
}

const ProfileInfo = ({ isMyProfile = false, user }: IProfileInfo) => {
  const myId = useTypedSelector((state) => state.auth.user?.id)

  async function createConversation(user_id: number, myId: number) {
    const responseConversation = await chatService.createConversation()

    if (responseConversation.status === 201) {
      const usersList = [user_id, myId]

      const conversation_id = responseConversation.data?.id

      usersList.forEach(async (userId) => {
        const responseMembership = await chatService.createMembership({
          conversation: conversation_id,
          user: userId
        })
      })
    }
  }

  return (
    <div
      className={cn(
        [styles.wrapper],
        [user?.background, styles.wrapper__little]
      )}
    >
      <div className={styles.content}>
        <div className={styles.avatar__container}>
          <img
            src={`${SERVER_URL}${user?.avatar}`}
            className={styles.avatar}
            draggable={false}
            alt='HypeFans'
          />
          {user?.status && <div className={styles.status}></div>}
          {!isMyProfile && (
            <ul className={styles.actions__list}>
              <li className={styles.actions__item}>
                <Share className={styles.actions__svg}></Share>
              </li>
              <li className={styles.actions__item}>
                <Frame className={styles.actions__svg}></Frame>
              </li>
              <li className={styles.actions__item}>
                <Message
                  onClick={() => createConversation(user.id, myId)}
                  className={styles.actions__svg}
                ></Message>
              </li>
            </ul>
          )}
        </div>
        <h2 className={styles.username}>{user?.username}</h2>
        <span className={styles.prefix}>{user?.prefix}</span>
        <div className={styles.count__contents}>
          <span className={styles.count__posts}>{user?.posts} постов</span>
          <span className={styles.count__fans}>365 друзей</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
