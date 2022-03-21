import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//api
import { getFollowingsList } from "../../lib/api/user";
//component
import { FollowTable } from "./index"

const FollowingsList = () => {
    const [followingsList, setFollowingsList] = useState([])
    const query = useParams();

    //フォロー中ユーザー一覧を取得する関数
    const handleGetFollowingsList = async () => {
        try {
            //apiへリクエスト
            const res = await getFollowingsList(query.id);
            //フォローしているユーザーの情報をセット
            setFollowingsList(res.data);
        } catch (e) {
        console.log(e);
        }
    }
    
    useEffect(() => {
        handleGetFollowingsList();
    }, []);

    const FollowingTable = () => {
        if (followingsList.length >= 1) {
            return (
                <FollowTable
                    followingData={followingsList}
                    followType="FOLLOWINGS"
                />
            );
        } else {
            return ( 
                <h2 className="c-text">NO FOLLOWINGS</h2>
            );
        }
    }
    return (
        <>  
            <FollowingTable />
        </>
    )
}

export default FollowingsList