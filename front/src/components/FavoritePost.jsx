import React, { useState, useEffect} from "react"
import { Link, useParams } from 'react-router-dom'
import { getFavoritePosts } from '../lib/api/user';
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

const FavoritePost = () => {
    const [favoriteData, setFavoriteData] = useState([])
    const query = useParams();
    const handleGetFavoritePosts = async () => {
        try {
            const res = await getFavoritePosts(query.id);
            console.log(res.data);
            setFavoriteData(res.data)
          } catch (e) {
            console.log(e);
          }
    }
    useEffect(() => {
        handleGetFavoritePosts();
    }, []);

    const FavoritePostTable = () => {
        if (favoriteData.length >= 1) {
            return (
                <>
                    <h2 className="p-text">FAVORITE POST</h2>
                    <Table>
                        <TableBody>
                            {favoriteData.map((item, index) => (
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
                                            <Link to={`/post/${item.id}`}>
                                                <p className="c-grid__item">{item.content}</p>
                                            </Link>
                                        </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </>
            )
        } else {
            return (
                <h2 className="p-text">NO POST</h2>
            );
        }
    }
    return (
        <FavoritePostTable />
    )
}

export default FavoritePost