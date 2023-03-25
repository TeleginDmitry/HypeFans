import React, { useState, useRef } from "react";
import styles from "./StoryList.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { StoryItem } from "../storyItem/StoryItem";
import "swiper/css";
import { useQuery } from "react-query";
import { StoryService } from "services/story/Story.service";
import { IStory } from "shared/interfaces/story.interface";
import { useObserver } from "hooks/useObserver";
import { IPagination } from "shared/interfaces/pagination.interface";
import { useTypedSelector } from "hooks/useTypedSelector";

export default function StoryList() {
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  const observer = useRef(null);

  const [optionsQuery, setOptionsQuery] = useState({
    offset: 0,
    limit: 5,
  });

  const [totalPages, setTotalPages] = useState(0);

  const [storiesList, setStoriesList] = useState<IStory[]>([]);

  async function fetchStories(offset: number, limit: number) {
    const response = await StoryService.getStories(limit, offset);
    return response.data as IPagination<IStory[]>;
  }

  const { isLoading } = useQuery(
    ["stories", optionsQuery.offset],
    () => fetchStories(optionsQuery.offset, optionsQuery.limit),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setTotalPages((state) => (state = data.count));
        setStoriesList((state) => [...state, ...data.results]);
      },
    }
  );

  useObserver(
    observer,
    optionsQuery.offset + optionsQuery.limit < totalPages,
    totalPages,
    optionsQuery,
    isLoading,
    () => {
      setOptionsQuery((state) => ({
        ...state,
        offset: state.offset + state.limit,
      }));
    }
  );

  return (
    <Swiper slidesPerView="auto" spaceBetween={10}>
      {/* {isAuth && (
				<SwiperSlide slot='wrapper-start' className={styles.slider}>
					<StoryItem {...stories[0]} isMyStory={true}></StoryItem>
				</SwiperSlide>
			)} */}
      {storiesList?.map((story) => {
        return (
          <SwiperSlide className={styles.slider} key={story.id}>
            <StoryItem {...story}></StoryItem>
          </SwiperSlide>
        );
      })}
      <div ref={observer} slot="wrapper-end"></div>
    </Swiper>
  );
}
