import client from "./client"
import Cookies from "js-cookie"

// 新規作成
export const follow = () => {
    return client.post('/relationships',
    {headers: {
      'access-token': Cookies.get('_access_token'),
      'client': Cookies.get('_client'),
      'uid': Cookies.get('_uid')
    }})
};