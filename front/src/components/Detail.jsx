import React, {useEffect, useState} from "react";
import { useParams} from 'react-router-dom'
import { getDetail } from "../lib/api/post"; 


import Table from "@mui/material/Table";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableBody } from "@mui/material";

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
            <h2 className="p-text">DETAIL</h2>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell align="center"sx={{width: "80%"}}>
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