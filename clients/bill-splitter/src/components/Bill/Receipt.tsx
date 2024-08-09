import * as React from 'react';
import {IReceiptProps} from "./IReceiptProps";
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Container from "@mui/material/Container";

const containerStyle: React.CSSProperties = {
    margin: 2,
}

export const Receipt: React.FC<IReceiptProps> = (props) => {
    const {title, items, onItemClick} = props;

    return (
        <Container sx={containerStyle}>
            {title}
            <Paper>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Value</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align="right">{item.quantity}</TableCell>
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="right">{item.value}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="add" size="small" onClick={() => onItemClick(item.id)}>
                                            <AddIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    )
}