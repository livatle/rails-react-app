// /src/lib/api/user.js
import client from './client';
import Cookies from "js-cookie"

export const getUserPosts = (id) => {
  return client.get(`/users/${id}`,
  {headers: {
    'access-token': Cookies.get('_access_token'),
    'client': Cookies.get('_client'),
    'uid': Cookies.get('_uid')
  }});
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

//フォロワー一覧
export const getFollowersList = (id) => {
  return client.get(`/users/${id}/follower`,
  {headers: {
    'access-token': Cookies.get('_access_token'),
    'client': Cookies.get('_client'),
    'uid': Cookies.get('_uid')
  }})
}

//フォローしているかどうか
export const checkFollowing = (id) => {
  return client.get(`/users/${id}`,
  {headers: {
    'access-token': Cookies.get('_access_token'),
    'client': Cookies.get('_client'),
    'uid': Cookies.get('_uid')
  }})
}