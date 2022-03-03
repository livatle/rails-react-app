import React, {useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
//api
import { checkFavorite, favorite, unfavorite } from '../lib/api/post'
//material-ui
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState('')
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
                const res = await unfavorite(query.id);
                console.log(res.data)
                setIsFavorite(false)
            } catch (e) {
            console.log(e);
            }
        }
    }

    const handleCheckFavorite = async (query) => {
        try {
          const res = await checkFavorite(query.id);
          setIsFavorite(res.data.isFavorite);
        } catch (e) {
          console.log(e);
        }
    };

    useEffect(() => {
        handleCheckFavorite(query);
    }, [query])

    return (
        <>
            {isFavorite ? (
                <FavoriteIcon 
                    onClick={()=> handleClickFavoriteButton()}
                    color="secondary"
                    fontSize="large"
                />
            ) : (
                <FavoriteBorderIcon
                    onClick={()=> handleClickFavoriteButton()}
                    variant="outlined"
                    color="secondary"
                    fontSize="large"
                />
            )}
        </>
    )
}
export default FavoriteButton