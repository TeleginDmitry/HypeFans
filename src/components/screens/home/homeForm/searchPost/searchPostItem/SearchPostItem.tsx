import PostHeader from 'components/shared/postHeader/PostHeader'
import { IPostSearch } from 'shared/interfaces/post.interface'
import { POST_PARAM } from 'configs/index.config'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import SearchPostItemActions from './searchPostItemActions/SearchPostItemActions'
import styles from './SearchPostItem.module.scss'

interface ISearchPostItem {
  onClickPost: (post_id: number) => void
  post: IPostSearch
  index: number
}

const SearchPostItem = ({ onClickPost, index, post }: ISearchPostItem) => {
  const { date_joined, description, is_liked, comments, likes, user, id } = post

  const navigate = useNavigate()

  const descriptionLimit =
    description.length > 150
      ? description.substring(0, 150) + '...'
      : description

  function handlerOpenModal() {
    navigate(`/?${POST_PARAM}=${id}`)
  }

  return (
    <motion.div
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className={styles.wrapper}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.container}>
        <PostHeader
          date_joined={date_joined}
          post_id={id}
          user={user}
        ></PostHeader>
        <p onClick={() => onClickPost(id)} className={styles.description}>
          {descriptionLimit}
        </p>
        <SearchPostItemActions
          handlerClickComment={handlerOpenModal}
          comments={comments}
          isLiked={is_liked}
          likes={likes}
          post_id={id}
        ></SearchPostItemActions>
      </div>
    </motion.div>
  )
}

export default SearchPostItem
