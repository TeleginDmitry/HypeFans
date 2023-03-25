import React, { useRef, useState, useEffect } from "react";
import styles from "./PostsList.module.scss";
import PostItem from "../postItem/PostItem";
import { useQuery } from "react-query";
import { PostService } from "@services/post/Post.service";
import { IPost } from "shared/interfaces/post.interface";
import { IPagination } from "shared/interfaces/pagination.interface";
import { useObserver } from "hooks/useObserver";
import Loader from "@ui/loader/Loader";

export default function PostsList() {
  const observer = useRef(null);

  const [optionsQuery, setOptionsQuery] = useState({
    offset: 0,
    limit: 10,
  });

  const [totalPages, setTotalPages] = useState(0);

  const [postsList, setPostsList] = useState<IPost[]>([]);

  async function fetchPosts(offset: number, limit: number) {
    const response = await PostService.getPosts(limit, offset);
    return response.data as IPagination<IPost[]>;
  }

  const { isLoading } = useQuery(
    ["posts", optionsQuery.offset],
    () => fetchPosts(optionsQuery.offset, optionsQuery.limit),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setTotalPages((state) => (state = data.count));
        setPostsList((state) => [...state, ...data.results]);
      },
    }
  );

  console.log(optionsQuery);

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
    },
    { rootMargin: "0px 0px 500px 0px" }
  );

  return (
    <div className={styles.posts__list}>
      {postsList?.map((post) => {
        return <PostItem key={post.id} {...post}></PostItem>;
      })}
      <div className={styles.posts__observer} ref={observer}></div>
      {isLoading && <Loader></Loader>}
    </div>
  );
}
