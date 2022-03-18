import React, { useEffect, useState } from "react";
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

    const handleGetList = async () => {
        try {
          const res = await getList();
          console.log(res.data);
          setDataList(res.data);
        } catch (e) {
          console.log(e);
        }
    };

    useEffect(() => {
        handleGetList();
    }, []);

    // 削除する関数を追加
    const handleDelete = async (item) => {
        // 引数にitemを渡してitem.idで「1」など取得できればOK
        console.log('click', item.id)
        try {
            const res = await deletePost(item.id)
            console.log(res.data)
        // データを再取得
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