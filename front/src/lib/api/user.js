// /src/lib/api/user.js
import client from './client';

export const getUserPosts = (id) => {
  return client.get(`/users/${id}`);
};