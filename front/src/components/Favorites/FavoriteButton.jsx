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

    //投稿にいいねを実行する関数
    const handleClickFavoriteButton = async () => {
        //いいねしていない投稿であった場合
        if (isFavorite === false) {
            try {
                //apiへリクエスト
                const res = await favorite(query.id);
                console.log(res.data)
                setIsFavorite(true)
            } catch (e) {
            console.log(e);
            }
        } else {
            try {
                //apiへリクエスト
                const res = await unfavorite(query.id);
                console.log(res.data)
                setIsFavorite(false)
            } catch (e) {
            console.log(e);
            }
        }
    }

    //既にいいねしている投稿かを判定する関数
    const handleCheckFavorite = async (query) => {
        try {
          //apiへリクエスト
          const res = await checkFavorite(query.id);
          //いいねしているかの真偽値をセット
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