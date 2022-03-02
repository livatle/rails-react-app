import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFollowersList } from "../lib/api/user";

import { FollowTable } from "./index";

const FollowersList = () => {
    const query = useParams();
    const [followersList, setFollowersList] = useState([])
    const handleGetFollowersList = async () => {
        try {
            const res = await getFollowersList(query.id);
            console.log(res.data);
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
                    followType="Followers"
                />
            )
        }  else {
            return (
                <h2 className="p-text">NO FOLLOWERS</h2>
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