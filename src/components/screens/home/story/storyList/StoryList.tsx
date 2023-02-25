import React from "react";
import styles from "./StoryList.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { stories } from "./data";
import { StoryItem } from "../storyItem/StoryItem";
import "swiper/css";
import { useAppSelector } from "../../../../../hooks/ReduxHooks";

export default function StoryList() {
  const {isAuth, user} = useAppSelector((state) => state.auth);

  return (
    <Swiper slidesPerView="auto" spaceBetween={10}>
      {isAuth && (
        <SwiperSlide
          slot="wrapper-start"
          className={styles.slider}
        >
			<StoryItem {...stories[0]} isMyStory={true} ></StoryItem>
		</SwiperSlide>
      )}
      {stories.map((story) => {
        return (
          <SwiperSlide  className={styles.slider} key={story.id}>
            <StoryItem {...story}></StoryItem>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
