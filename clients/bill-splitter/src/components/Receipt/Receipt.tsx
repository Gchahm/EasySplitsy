import * as React from 'react';
import {IReceiptProps} from "./IReceiptProps";
import {IconButton, Table, TableBody, TableCell, TableHead} from "@mui/material";
import LeftIcon from '@mui/icons-material/ChevronLeft';
import RightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Container from "@mui/material/Container";
import {StyledTableHeaderRow, StyledTableRow} from "../StyledMUI";
import {Currency} from "../currency";

const containerStyle: React.CSSProperties = {
    margin: 2,
    padding: 0,
    maxWidth: '90vw'
}

export const Receipt: React.FC<IReceiptProps> = (props) => {
    const {selectedParticipant, billTotal, billItems, items, onItemClick, onParticipantItemClick} = props;

    const selectedParticipantItems = selectedParticipant?.items || {};

    return (
        <Container sx={containerStyle}>
            <Table aria-label="simple table">
                <TableHead>
                    <StyledTableHeaderRow>
                        <TableCell align="right" colSpan={5}>
                            Remaining <Currency value={billTotal}/>
                        </TableCell>
                    </StyledTableHeaderRow>
                    <StyledTableHeaderRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>
                            <ReceiptIcon/>
                        </TableCell>
                        <TableCell/>
                        <TableCell>
                            <PersonIcon/>
                        </TableCell>
                    </StyledTableHeaderRow>
                </TableHead>
                <TableBody>
                    {items.map(({id, name, price}) => (
                        <StyledTableRow
                            key={name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell>
                                {name}
                            </TableCell>
                            <TableCell>
                                <Currency value={price}/>
                            </TableCell>
                            <TableCell>
                                {billItems[id] ? billItems[id] : 0}
                            </TableCell>

                            <TableCell>
                                <IconButton color="primary" onClick={() => onParticipantItemClick(id)}>
                                    <LeftIcon/>
                                </IconButton>
                                <IconButton color="primary" onClick={() => onItemClick(id)}>
                                    <RightIcon/>
                                </IconButton>
                            </TableCell>

                            <TableCell>
                                {selectedParticipantItems[id] ? selectedParticipantItems[id] : 0}
                            </TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}