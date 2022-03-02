import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { getDetail } from "../lib/api/post"; 


import Table from "@mui/material/Table";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { TableBody } from "@mui/material";

import { FavoriteButton } from './index'

const drawerWidth = 240;

const Detail = () => {
    const [data, setData] = useState({});
    const query = useParams();
    const navigate = useNavigate();
    
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
        <Box 
            component="main"
            sx={{ ml: "240px", width: `calc(100% - ${drawerWidth}px)` }}
        >
                <TableContainer component={Paper} sx={{bgcolor: "#222A4F", mt: "2em"}}>
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
            </TableContainer>
        </Box>
    )
}
export default Detail