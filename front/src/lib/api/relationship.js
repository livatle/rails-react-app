import client from "./client"
import Cookies from "js-cookie"

// 新規作成
export const follow = (params) => {
    return client.post('./relationships', params,
    {headers: {
        'access-token': Cookies.get('_access_token'),
        'client': Cookies.get('_client'),
        'uid': Cookies.get('_uid')
    }})
};

//削除
export const unfollow = (id, params) => {
    return client.delete(`./relationships/${id}`, params,
    {headers: {
        'access-token': Cookies.get('_access_token'),
        'client': Cookies.get('_client'),
        'uid': Cookies.get('_uid')
    }})
};