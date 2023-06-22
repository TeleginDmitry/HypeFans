import {
  IPostComment,
  IPostSearch,
  IPostMedia,
  IPostLike,
  IPost
} from 'shared/interfaces/post.interface'
import { IPagination } from 'shared/interfaces/pagination.interface'
import instance from 'api/api.interceptor'
import { AxiosResponse } from 'axios'

import {
  IDeleteCommentLikeLink,
  ICreateCommentLikeData,
  ICreateCommentData,
  IGetMediaParams,
  IGetPostsParams,
  IGetComments,
  IUploadMedia,
  ICreatePost
} from './PostService.interface'

export const PostService = {
  getPostsSearch: async (
    description: string
  ): Promise<AxiosResponse<IPostSearch[]>> => {
    return instance.get(`posts/`, {
      params: {
        search: description
      }
    })
  },
  deleteCommentLike: async ({
    comment
  }: IDeleteCommentLikeLink): Promise<AxiosResponse<void>> => {
    return instance.delete(`post/comment/like/${comment}/`)
  },
  getComments: async (
    params: IGetComments
  ): Promise<AxiosResponse<IPagination<IPostComment[]>>> => {
    return instance.get(`post/comments/`, { params })
  },
  getPosts: async (
    params: IGetPostsParams
  ): Promise<AxiosResponse<IPagination<IPost[]>>> => {
    return instance.get(`posts/`, {
      params
    })
  },
  createComment: async (
    data: ICreateCommentData
  ): Promise<AxiosResponse<IPostComment>> => {
    return instance.post(`post/comments/`, data)
  },
  // },
  getMedias: async (
    params: IGetMediaParams
  ): Promise<AxiosResponse<IPostMedia[]>> => {
    return instance.get(`post/medias/`, { params })
  },

  deleteComment: async (comment_id: number): Promise<AxiosResponse<void>> => {
    return instance.delete(`post/comment/${comment_id}/`)
  },
  createLike: async (post_id: number): Promise<AxiosResponse<IPostLike>> => {
    return instance.post(`post/likes/`, { post: post_id })
  },
  deleteMedia: async (post_id: number): Promise<AxiosResponse<void>> => {
    return instance.delete(`post/media/${post_id}/`)
  },
  uploadMedia: async (data: IUploadMedia): Promise<AxiosResponse<IPost>> => {
    return instance.post(`posts/medias/`, data)
  },
  deleteLike: async (post_id: number): Promise<AxiosResponse<void>> => {
    return instance.delete(`post/like/${post_id}/`)
  },
  getPost: async (post_id: number | string): Promise<AxiosResponse<IPost>> => {
    return instance.get(`post/${post_id}/`)
  },
  createMedia: async (data: any): Promise<AxiosResponse<IPostMedia>> => {
    return instance.post(`post/medias/`, data)
  },

  // TEST
  // getMedias: async (
  // 	params: IGetMediasParams
  // ): Promise<AxiosResponse<IPostMedia[]>> => {
  // 	return instanceSimple.get(`post/medias/`, { params })
  deletePost: async (post_id: number): Promise<AxiosResponse<void>> => {
    return instance.delete(`post/${post_id}/`)
  },
  createCommentLike: async (data: ICreateCommentLikeData) => {
    return instance.post('post/comment/likes/', data)
  },
  createPost: async (data: ICreatePost): Promise<AxiosResponse<IPost>> => {
    return instance.post(`posts/`, data)
  }
}
