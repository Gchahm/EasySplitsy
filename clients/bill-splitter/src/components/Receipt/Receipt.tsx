import * as React from 'react';
import {IReceiptProps} from "./IReceiptProps";
import {Avatar, Chip, Table, TableBody, TableCell, TableHead} from "@mui/material";
import ReceiptIcon from '@mui/icons-material/Receipt';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import Container from "@mui/material/Container";
import {StyledTableHeaderRow, StyledTableRow} from "../StyledMUI";

const containerStyle: React.CSSProperties = {
    margin: 2,
}

export const Receipt: React.FC<IReceiptProps> = (props) => {
    const {selectedParticipant, billItems, items, onItemClick, onParticipantItemClick} = props;

    const selectedParticipantItems = selectedParticipant?.items || {};

    return (
        <Container sx={containerStyle}>
            <Table aria-label="simple table">
                <TableHead>
                    <StyledTableHeaderRow>
                        <TableCell>Name</TableCell>
                        <TableCell>
                            <ReceiptIcon/>
                        </TableCell>
                        <TableCell/>
                        <TableCell>
                            <Avatar>{selectedParticipant?.name[0]}</Avatar>
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
                                {name} - {price}
                            </TableCell>
                            <TableCell>
                                <Chip label={billItems[id] ? billItems[id] : 0}
                                      onClick={() => onItemClick(id)}/>
                            </TableCell>

                            <TableCell>
                                <MultipleStopIcon/>
                            </TableCell>

                            <TableCell>
                                <Chip
                                    label={selectedParticipantItems[id] ? selectedParticipantItems[id] : 0}
                                    onClick={() => onParticipantItemClick(id)}/>
                            </TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}