import PostPointsActions from 'components/shared/postPointsActions/PostPointsActions'
import { ReactComponent as ToBack } from '@assets/images/newPost/arrow-left.svg'
import PointsContainer from 'components/shared/pointsContainer/PointsContainer'
import { IPostUser } from 'shared/interfaces/post.interface'

import styles from './PostModalHeader.module.scss'

interface IPostModalHeader {
  handlerClose(): void
  user: IPostUser
  post_id: number
}

const PostModalHeader = ({ handlerClose, post_id, user }: IPostModalHeader) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title__container}>
        <ToBack onClick={handlerClose} className={styles.svg}></ToBack>
        <p className={styles.title}>Запись на стене</p>
      </div>

      <PointsContainer>
        <div className={styles.actions__points}>
          <PostPointsActions
            user_id={user.id}
            post_id={post_id}
          ></PostPointsActions>
        </div>
      </PointsContainer>
    </div>
  )
}

export default PostModalHeader
