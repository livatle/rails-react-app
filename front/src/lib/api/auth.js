// src/lib/api/auth.js
import client from './client';
import Cookies from "js-cookie"
import { headers } from './client';

// サインアップ（新規アカウント作成)
export const signUp = (params) => {
  return client.post('/auth', params);
};

// サインイン（ログイン）
export const signIn = (params) => {
  return client.post('/auth/sign_in', params);
};

// サインアウト（ログアウト）
export const signOut = () => {
  return client.delete('/auth/sign_out', headers);
};

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  if (
    !Cookies.get('_access_token') ||
    !Cookies.get('_client') ||
    !Cookies.get('_uid')
  )
    return;
  return client.get('/auth/sessions', headers);
};