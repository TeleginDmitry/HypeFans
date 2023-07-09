import ModalsContainer from './modalsContainer/ModalsContainer'
import StoryList from './story/storyList/StoryList'
import PostsList from './post/postList/PostsList'
import HomeHeader from './homeHeader/HomeHeader'
import HomeForm from './homeForm/HomeForm'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <HomeHeader></HomeHeader>
        <StoryList></StoryList>
        <HomeForm></HomeForm>
        <PostsList></PostsList>
      </div>
      <ModalsContainer></ModalsContainer>
    </div>
  )
}
