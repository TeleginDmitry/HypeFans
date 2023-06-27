import MyAvatar from 'components/ui/avatars/myAvatar/MyAvatar'

import CreationForm from './creationForm/CreationForm'
import styles from './CreationPost.module.scss'

interface ICreationPost {
  changeStateActive: () => void
}

const CreationPost = ({ changeStateActive }: ICreationPost) => {
  return (
    <div className={styles.wrapper}>
      <MyAvatar />

      <CreationForm changeStateActive={changeStateActive}></CreationForm>
    </div>
  )
}

export default CreationPost
