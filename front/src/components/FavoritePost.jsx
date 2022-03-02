import React, {useEffect} from "react"
import { Link } from 'react-router-dom'
import { getUserPosts } from '../lib/api/user';
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

const FavoritePost = () => {
    const [favoritePost, setFavoritePost] = ([])
    const handleGetFavoritePosts = async () => {
        try {
            const res = await getUserPosts();
            console.log(res.data);
            setFavoritePost(res.data);
          } catch (e) {
            console.log(e);
          }
    }
    useEffect(() => {
        handleGetFavoritePosts();
    }, []);

    return (
        <Table>
            <TableBody>
                {favoritePost.map((item, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                    >   
                        <TableCell align="center">
                            <Link to={`/users/${item.userId}`}>
                                <p className="c-grid__item">{item.user}</p>
                            </Link>
                        </TableCell>
                        <TableCell align="center">
                            <Link to={`/posts/${item.id}`}>
                                <p className="c-grid__item">{item.content}</p>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default FavoritePost