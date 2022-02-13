import React from "react";
import Button from '@mui/material/Button';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteButton = () => {
    return (
        <FavoriteBorderIcon 
            sx={{color: "primary", display: "inline-block", ml: "2em"}}
            variant='contained'
            color='primary'
        />
    )
}

export default FavoriteButton