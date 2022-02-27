import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import { FollowInfo, PostsTable } from "./index";
// api
import { getUserPosts } from '../lib/api/user';
import { deletePost } from '../lib/api/post';

// context
import { AuthContext } from '../App';

const UserPosts = () => {
    const [dataUser, setDataUser] = useState([]);
    const query = useParams();

    const { currentUser } = useContext(AuthContext);

    const handleGetUserPosts = async () => {
        try {
          const res = await getUserPosts(query.id);
          console.log(res.data);
          setDataUser(res.data.posts);
        } catch (e) {
          console.log(e);
        }
    };

    useEffect(() => {
        handleGetUserPosts(query);
    }, [query]);
    
    const handleDelete = async (item) => {
        console.log('click', item.id)
        try {
        const res = await deletePost(item.id)
        console.log(res.data)
        // データを再取得
        handleGetUserPosts()
        } catch (e) {
            console.log(e)
        }   
    }
        const UserTable = () => {
            if (dataUser.length >= 1) {
              return (
                <>
                  <PostsTable
                    dataList={dataUser}
                    handleDelete={handleDelete}
                  />
                </>
              );
            } else {
              return (
                  <h2 className="u-text">NO POST</h2>
              );
            }
        };
    return (
        <div className="c-grid">
          <div>
          {query.id == currentUser.id ? (
            <></>
            ) : (
            <FollowInfo />
            )
          }
          </div>
          <UserTable />
        </div>
    )
}

export default UserPosts