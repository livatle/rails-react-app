import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//component
import { PostsTable } from './index'
//api
import { getList, deletePost } from '../../lib/api/post'
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Divider, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const useStyles = makeStyles(() =>
    createStyles({
        maxSize: {
            width: "100%"
        }
    }),
);

const PostsList = () => {
    const navigate = useNavigate();
    const [dataList, setDataList] = useState([]);
    const classes = useStyles();

    //投稿一覧を取得する関数
    const handleGetList = async () => {
        try {
          //apiへリクエスト
          const res = await getList();
          setDataList(res.data);
        } catch (e) {
          console.log(e);
        }
    };

    useEffect(() => {
        handleGetList();
    }, []);

    //投稿を削除する関数
    const handleDelete = async (item) => {
        try {
            //apiへリクエスト
            const res = await deletePost(item.id)
            console.log(res.data)
            //投稿一覧を再取得
            handleGetList()
        } catch (e) {
            console.log(e)
        }
    }

    const Title = () => {
        if (dataList.length >= 1) {
            return (
                <>
                    <h2 className="c-text">ALL POST</h2>
                    <Divider color="#ffffff" />
                </>
            )
        } else {
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
    }
    return (
        <>
            <Title />
            <PostsTable
                dataList={dataList}
                handleDelete={handleDelete}
                username={dataList.user}
            />
        </>
    )
}

export default PostsList