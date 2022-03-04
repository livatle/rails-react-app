// /src/lib/api/user.js
import client from './client';
import { headers } from "./client";

//ユーザー投稿一覧
export const getUserPosts = (id) => {
  return client.get(`/users/${id}`, headers);
};

//フォロー中一覧
export const getFollowingsList = (id) => {
  return client.get(`/users/${id}/following`, headers)
}

//フォロワー一覧
export const getFollowersList = (id) => {
  return client.get(`/users/${id}/follower`, headers)
}

//フォローしているかどうか
export const checkFollowing = (id) => {
  return client.get(`/users/${id}`, headers)
}

//お気に入りした投稿一覧
export const getFavoritePosts = (id) => {
  return client.get(`/users/${id}/favorite_posts`, headers)
}