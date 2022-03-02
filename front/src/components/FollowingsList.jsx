import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFollowingsList } from "../lib/api/user";

import { FollowInfo, FollowTable } from "./index"

const FollowingsList = (props) => {
    const query = useParams();
    const [followingsList, setFollowingsList] = useState([])
    const handleGetFollowingsList = async () => {
        try {
            const res = await getFollowingsList(query.id);
            console.log(res.data);
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
                    followType="Followings"
                />
            );
        } else {
            return ( 
                <h2 className="p-text">NO FOLLOWINGS</h2>
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