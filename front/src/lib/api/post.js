import client from "./client"
import { headers } from "./client";

// 一覧
export const getList = () => {
  return client.get('/posts');
};

// 詳細
export const getDetail = (id) => {
  return client.get(`/posts/${id}`, headers)}

// 新規作成
export const createPost = (params) => {
  return client.post('/posts', params, headers)
};

// 更新
export const updatePost = (id, params) => {
  return client.patch(`/posts/${id}`, params, headers);
};

// 削除
export const deletePost = (id) => {
  return client.delete(`/posts/${id}`, headers);
};

// 新規お気に入り作成
export const favorite = (id, params) => {
  return client.post(`/posts/${id}/favorites`, params, headers)
};

// お気に入り解除
export const unfavorite = (id) => {
  return client.delete(`/posts/${id}/favorites`, headers)
};

//お気に入りしているかどうか
export const checkFavorite = (id) => {
  return client.get(`/posts/${id}`, headers)
};