import React from "react";
import styles from "./PostItem.module.scss";
import { IPost } from "../posts.interface";
import { ReactComponent as Like } from "@assets/images/post/like.svg";
import { ReactComponent as Comment } from "@assets/images/post/comments.svg";
import { ReactComponent as Bookmark } from "@assets/images/post/bookmark.svg";

export default function PostItem(post: IPost) {
  const {
    count_comments,
    count_likes,
    description,
    id,
    medias,
    user,
    time_create,
  } = post;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.user__container}>
            <div className={styles.logo__container}>
              <img className={styles.logo} src={user.avatar} alt="HypeFans" />
            </div>
            <div className={styles.user__texts}>
              <h2 className={styles.user__name}>{user.username}</h2>
              <span className={styles.user__prefix}>{user.prefix}</span>
            </div>
          </div>
          <div className={styles.time__container}>
            <p className={styles.time}>{time_create}</p>
          </div>
          <div className={styles.point__container}>
            <div className={styles.point}></div>
            <div className={styles.point}></div>
            <div className={styles.point}></div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.description__container}>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.images__container}>
            {medias.map((image) => {
              return (
                <img
                  className={styles.image}
                  src={image.media}
                  alt="HypeFans"
                />
              );
            })}
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles.action__block}>
            <Like className={styles.action__svg}></Like>
            <Comment className={styles.action__svg}></Comment>
          </div>
          <div className={styles.action__block}>
            <Bookmark className={styles.action__svg}></Bookmark>
          </div>
        </div>
        <div className={styles.info}>
          <span className={styles.info__likes}>{count_likes} лайков</span>
          <span className={styles.info__comments}>
            Посмотреть {count_comments} комментариев
          </span>
        </div>
      </div>
    </div>
  );
}
