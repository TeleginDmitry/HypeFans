import MyAvatar from 'components/ui/avatars/myAvatar/MyAvatar'
import { Search } from 'icons-hypefans-lib'

import CreationForm from './creationForm/CreationForm'
import styles from './CreationPost.module.scss'

interface ICreationPost {
  changeStateActive: () => void
}

const CreationPost = ({ changeStateActive }: ICreationPost) => {
  return (
    <div className={styles.wrapper}>
      <MyAvatar />

      <CreationForm></CreationForm>

      <Search onClick={changeStateActive} className={styles.icon}></Search>
    </div>
  )
}

export default CreationPost
