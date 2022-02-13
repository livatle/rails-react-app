import React, {useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import { favorite, unfavorite } from '../lib/api/post'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false)
    
    const query = useParams();
    const handleClickFavoriteButton = async () => {
        if (isFavorite === false) {
            try {
                const res = await favorite(query.id);
                console.log(res.data)
                setIsFavorite(true)
            } catch (e) {
            console.log(e);
            }
        } else {
            try {
                const res = await unfavorite();
                console.log(res.data)
                setIsFavorite()
            } catch (e) {
            console.log(e);
            }
        }
    }
    return (
        <>
            {isFavorite ? (
                <FavoriteIcon 
                    onClick={()=> handleClickFavoriteButton()}
                    color='secondary' 
                />
            ) : (
                <FavoriteBorderIcon
                    onClick={()=> handleClickFavoriteButton()}
                />
            )}
        </>
    )
}
export default FavoriteButton