import React, {useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
//api
import { checkFavorite, favorite, unfavorite } from '../../lib/api/post'
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const useStyles = makeStyles(() =>
    createStyles({
       button: {
           color: "#ff1988",
       }
    }),
);

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState('')
    const query = useParams();
    const classes =  useStyles();

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
                    className={classes.button}
                    fontSize="large"
                />
            ) : (
                <FavoriteBorderIcon
                    onClick={()=> handleClickFavoriteButton()}
                    color="secondary"
                    className={classes.button}
                    fontSize="large"
                    variant="outlined"
                />
            )}
        </>
    )
}
export default FavoriteButton