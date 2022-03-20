import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
//context
import { AuthContext } from '../../App';
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Icon, Table, TableBody, TableCell, TablePagination, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(() =>
    createStyles({
       button: {
           color: "#1876D1",
           textDecoration: "none",
       }
    }),
);

const buttonStyle = {
    updateButton: {
        pr: "1em",
        pl: "1em",
        marginRight: "1em",
        marginBottom: "0.5em"
    },
    deleteButton: {
        paddingTop: "0.5em",
        paddingBottom: "0.5em"
    }
}

const PostsTable = (props) => {
    const { dataList, handleDelete, username } = props
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { currentUser } = useContext(AuthContext)
    const classes = useStyles();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <Table>
            <TableBody>
                {dataList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) =>
                    <TableRow
                        key={item.id}
                        sx={{ bgcolor: "#222A50", width: "100%", '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell sx={{ width: "15%" }} align={"center"}>
                            <NavLink 
                                to={`/users/${item.userId}`}
                            >
                                <p className="c-grid__item">{item.user}</p>
                                <p className="c-grid__item">{username}</p>
                            </NavLink>
                        </TableCell>
                        <TableCell>
                            <NavLink 
                                to={`/post/${item.id}`}
                            >
                                <p className="c-grid__item">{item.content}</p>
                            </NavLink>
                        </TableCell>
                        <TableCell sx={{width: "20%"}}>
                        {item.userId === currentUser?.id ?
                            <>
                                <Button sx={buttonStyle.updateButton}>
                                    <NavLink 
                                        to={`/edit/${item.id}`}
                                        className={classes.button}
                                    >
                                        <Icon>
                                            <EditIcon />
                                        </Icon>
                                        EDIT
                                    </NavLink>
                                </Button>
                                <Button
                                    onClick={() => handleDelete(item)}
                                    className={classes.button}
                                    sx={buttonStyle.deleteButton}
                                >
                                    <DeleteIcon />
                                    DELETE
                                </Button>
                            </>
                            : 
                            <></>
                        }
                        </TableCell>
                    </TableRow>
                )}
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                color="primary"
                count={dataList.length}
                rowsPerPageOptions={[5, 10]}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default PostsTable