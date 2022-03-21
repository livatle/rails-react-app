import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//api
import { getFollowersList } from "../../lib/api/user";
//component
import { FollowTable } from "./index";

const FollowersList = () => {
    const [followersList, setFollowersList] = useState([])
    const query = useParams();

    //フォローされているユーザー一覧を取得する関数
    const handleGetFollowersList = async () => {
        try {
            //apiへリクエスト
            const res = await getFollowersList(query.id);
            //フォローされているユーザーの情報をセット
            setFollowersList(res.data);
          } catch (e) {
            console.log(e);
          }
    }
    
    useEffect(() => {
        handleGetFollowersList();
    }, []);
    
    const FollowersTable = () => {
        if (followersList.length >= 1) {
            return(
                <FollowTable
                    followingData={followersList}
                    followType="FOLLOWERS"
                />
            )
        }  else {
            return (
                <h2 className="c-text">NO FOLLOWERS</h2>
            );
        }
    }
    return (
        <>
            <FollowersTable />
        </>
    )
        
}

export default FollowersList