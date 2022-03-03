import React, {useEffect, useState} from "react";
import { useParams} from 'react-router-dom'
//api
import { getDetail } from "../lib/api/post"; 
//material-ui
import { Divider, Table, TableBody, TableCell, TableRow } from "@mui/material";
//component
import { FavoriteButton } from './index'

const Detail = () => {
    const [data, setData] = useState({});
    const query = useParams();
    
    useEffect(() => {
        handleGetDetail(query);
    }, [query]);

    const handleGetDetail = async (query) => {
        try {
        const res = await getDetail(query.id);
        console.log(res.data);
        setData(res.data.post);
        } catch (e) {
        console.log(e);
        }
    };

    return (
        <>
            <h2 className="c-text">DETAIL</h2>
            <Divider color="#ffffff" />
            <Table>
                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                        <TableCell align="center">
                            <p className="c-grid__item">{data.content}</p>
                        </TableCell>
                    <TableCell align="center">
                        <FavoriteButton />
                    </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}
export default Detail