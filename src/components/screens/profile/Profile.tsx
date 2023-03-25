import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import PostsList from "../home/post/postList/PostsList";
import styles from "./Profile.module.scss";
import UserInfo from "./userInfo/UserInfo";

const Profile = () => {
  // const id = useAppSelector((state) => state.auth.user?.id)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.user}>
          <div className={styles.user__container}>
            <UserInfo></UserInfo>
          </div>
          <div className={styles.button__container}>
            <Link to={"/edit"}>
              <Button>Редактировать профиль</Button>
            </Link>
          </div>
        </div>
        <div className={styles.posts__container}>
          <PostsList></PostsList>
        </div>
      </div>
    </div>
  );
};

export default Profile;
