import * as React from 'react';
import {IReceiptProps} from "./IReceiptProps";
import {IconButton, Table, TableBody, TableCell, TableHead} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Container from "@mui/material/Container";
import {StyledTableRow} from "../StyledMUI/StyledTableRow";
import {StyledTableHeaderRow} from "../StyledMUI/StyledTableHeaderRow";

const containerStyle: React.CSSProperties = {
    margin: 2,
}

export const Receipt: React.FC<IReceiptProps> = (props) => {
    const {title, items, onItemClick} = props;

    return (
        <Container sx={containerStyle}>
            {title}
                <Table aria-label="simple table">
                    <TableHead>
                        <StyledTableHeaderRow>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Value</TableCell>
                            <TableCell></TableCell>
                        </StyledTableHeaderRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            <StyledTableRow
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
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
        </Container>
    )
}