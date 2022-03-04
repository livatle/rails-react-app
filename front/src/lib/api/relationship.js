import client from "./client"
import { headers } from "./client";

// 新規作成
export const follow = (params) => {
    return client.post('/relationships', params, headers)
};

//削除
export const unfollow = (id) => {
    return client.delete(`/relationships/${id}`, headers)
};