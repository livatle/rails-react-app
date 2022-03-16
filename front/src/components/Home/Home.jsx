import React from "react";
import { useNavigate } from "react-router-dom";
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
const useStyles = makeStyles(() =>
    createStyles({
        maxSize: {
            width: "100%"
        }
    }),
);

const Home = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <>
            <h1 className="c-text"> FELL FREE TO POST!</h1>
            <Typography sx={{ mr: "auto", ml: "auto", width: "50%"}}>
                <Button
                    onClick={()=> navigate('/new')}
                    variant="outlined"
                    className={classes.maxSize}
                    sx={{ p: "2em", fontSize: "1em", borderRadius: "10em" }}
                >
                    <CreateIcon sx={{mr: "0.5em"}} />
                    CREATE
                </Button>
            </Typography>
        </>
    )
}

export default Home