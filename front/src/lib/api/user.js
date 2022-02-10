// /src/lib/api/user.js
import client from './client';
import Cookies from "js-cookie"

//詳細
export const getUserPosts = (id) => {
  return client.get(`/users/${id}`);
};

//フォロー中一覧
export const getFollowingsList = (id) => {
  return client.get(`/users/${id}/following`,
  {headers: {
    'access-token': Cookies.get('_access_token'),
    'client': Cookies.get('_client'),
    'uid': Cookies.get('_uid')
  }})
}