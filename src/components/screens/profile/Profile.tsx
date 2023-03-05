import React from "react";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.user}>
            <div className={styles.user__container}>
                <div className={styles.user__wrapper}>
                    <div className={styles.user__background}>
                        <img src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-in-a-neon-laser-light-great-for-backgrounds-and-wallpapers_181624-9331.jpg?w=2000" alt="" />
                    </div>
                    <div className={styles.user__content}></div>
                </div>
                <div className={styles.user__description}>

                </div>
            </div>
            <div className={styles.user__changing}>

            </div>
        </div>
        <div className={styles.posts__container}></div>
      </div>
    </div>
  );
};

export default Profile;
