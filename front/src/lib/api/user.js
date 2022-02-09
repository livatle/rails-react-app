// /src/lib/api/user.js
import client from './client';

//詳細
export const getUserPosts = (id) => {
  return client.get(`/users/${id}`);
};